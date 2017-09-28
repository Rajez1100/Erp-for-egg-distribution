from django.contrib.auth.decorators import permission_required
from django.utils.decorators import method_decorator
from rest_framework import permissions
from rest_framework import viewsets, status
from rest_framework.response import Response
from rest_framework.decorators import list_route, detail_route
from distribution_management.models import \
    EggFarms, SalesTeams, EggCollections, DemandTransfers, \
    SalesSummary, DailyStocks, Payments
from distribution_management.serializers import \
    EggFarmsSerializer, SalesTeamsSerializer, EggCollectionsSerializer, DemandTransfersSerializer, \
    CollectionsAndPaymentsSerializer
from django.db.models import F, Sum, Max, Q
from django.db.models.functions import Coalesce
import datetime
from itertools import chain
from operator import itemgetter, attrgetter


class ReportsViewSet(viewsets.ViewSet):
    permission_classes = (permissions.IsAuthenticated,)

    def get_sales_teams(self, **kwargs):
        queryset = SalesTeams.objects.all().filter(**kwargs)

        return queryset

    def get_collections(self, **kwargs):
        queryset = EggCollections.objects.all().filter(**kwargs)

        return queryset

    def get_sales(self, **kwargs):
        queryset = SalesSummary.objects.all().filter(**kwargs)
        return queryset

    def get_stock(self, **kwargs):
        queryset = DailyStocks.objects.all().filter(**kwargs)

        return queryset

    def get_transfers(self, **kwargs):
        queryset = DemandTransfers.objects.all().filter(**kwargs)

        return queryset

    def get_payments(self, **kwargs):
        queryset = Payments.objects.all().filter(**kwargs)

        return queryset

    def get_farms(self, **kwargs):
        queryset = EggFarms.objects.all().filter(**kwargs)

        return queryset

    @list_route(methods=['get'], url_path='sales')
    def generate_sales_report(self, request, *args, **kwargs):
        report_data = {
            'summary': {}
        }
        query_params = request.query_params.dict()

        today = datetime.date.today()
        last_saturday = today + datetime.timedelta(days=(6 - today.isoweekday()))

        start_date = datetime.datetime.strptime(query_params.pop('start'), '%d-%m-%Y') \
            if 'start' in query_params else last_saturday - datetime.timedelta(days=6)

        end_date = datetime.datetime.strptime(query_params.pop('end'), '%d-%m-%Y') \
            if 'end' in query_params else last_saturday

        report_data['summary'] = self.generate_sales_summary(start_date, end_date, query_params)

        return Response(report_data, status.HTTP_200_OK)

    @list_route(methods=['get'], url_path='payments')
    def generate_payments_report(self, request, *args, **kwargs):
        report_data = {
            'summary': {},
            'farm_wise_summary': list()
        }

        query_params = request.query_params.dict()

        today = datetime.date.today()
        last_saturday = today + datetime.timedelta(days=(6 - today.isoweekday()))

        start_date = datetime.datetime.strptime(query_params.pop('start'), '%d-%m-%Y') \
            if 'start' in query_params else last_saturday - datetime.timedelta(days=6)

        end_date = datetime.datetime.strptime(query_params.pop('end'), '%d-%m-%Y') \
            if 'end' in query_params else last_saturday

        filters = {
            'date__range': (start_date, end_date + datetime.timedelta(days=1))
        }

        if query_params.get('farm', 'all') != 'all':
            filters.update({
                'farm__id': query_params['farm']
            })

        collections = self.get_collections(**filters)
        payments = self.get_payments(**filters)
        collections_summary = collections.aggregate(plates_collection__sum=Coalesce(Sum('no_of_plates'), 0),
                                                    cost_collection__sum=Coalesce(Sum('cost'), 0))
        payments_summary = payments.aggregate(cost_payment__sum=Coalesce(Sum('amount'), 0))

        report_data['summary'].update(collections_summary)
        report_data['summary'].update(payments_summary)
        report_data['summary']['cost_balance__sum'] = report_data['summary']['cost_collection__sum'] - \
                                                      report_data['summary']['cost_payment__sum']

        # Farm wise summary
        left = collections.values('farm').annotate(collection_plates=Coalesce(Sum('no_of_plates'), 0),
                                                   collection_cost=Coalesce(Sum('cost'), 0),
                                                   payment_amount=Coalesce(Sum('farm__payments__amount'), 0)) \
            .values('farm', 'farm__name', 'collection_plates', 'collection_cost', 'payment_amount')
        right = payments.values('farm').annotate(
            collection_plates=Coalesce(Sum('farm__eggcollections__no_of_plates'), 0),
            collection_cost=Coalesce(Sum('farm__eggcollections__cost'), 0),
            payment_amount=Coalesce(Sum('amount'), 0)) \
            .values('farm', 'farm__name', 'collection_plates', 'collection_cost', 'payment_amount')

        union = list(chain(left, right))
        union = [dict(b) for b in set([tuple(a.items()) for a in union])]
        union = sorted(union, key=lambda r: r['farm__name'])

        report_data['farm_wise_summary'] = union

        return Response(report_data, status=status.HTTP_200_OK)

    @list_route(methods=['get'], url_path='collections-and-payments')
    def list_collections_and_payments(self, request, *args, **kwargs):
        query_params = request.query_params.dict()

        today = datetime.date.today()
        last_saturday = today + datetime.timedelta(days=(6 - today.isoweekday()))

        start_date = datetime.datetime.strptime(query_params.pop('start_date'), '%d-%m-%Y') \
            if 'start_date' in query_params else last_saturday - datetime.timedelta(days=6)

        end_date = datetime.datetime.strptime(query_params.pop('end_date'), '%d-%m-%Y') \
            if 'end_date' in query_params else last_saturday

        filters = """date >= '%s' AND date < '%s'""" % (start_date.strftime('%Y-%m-%d'), end_date.strftime('%Y-%m-%d'))

        if query_params.get('farm', 'all') != 'all':
            filters += """AND farm_id = %s""" % query_params['farm']

        order_by_maps = {
            'date': 'date ASC',
            '-date': 'date DESC',
            'plates_collection': 'plates_collection ASC',
            '-plates_collection': 'plates_collection DESC',
            'cost_collection': 'cost_collection ASC',
            '-cost_collection': '-cost_collection DESC',
            'cost_payment': 'cost_payment ASC',
            '-cost_payment': '-cost_payment DESC'
        }

        order_by = query_params.pop('order_by', '-date')
        offset = int(query_params.pop('offset', '0'))
        limit = int(query_params.pop('end', '10'))

        query = '''SELECT id, date, farm_id, SUM(no_of_plates) as plates_collection,
                                                    SUM(cost_collection) as cost_collection, SUM(cost_payment) as cost_payment
                                                    FROM
                                                     (SELECT 1 as id, c.date, c.farm_id, c.no_of_plates, c.cost as cost_collection, 0 as cost_payment
                                                      FROM distribution_management_eggcollections as c
                                                      UNION
                                                      SELECT 1 as id, p.date, p.farm_id, 0 as no_of_plates, 0 as cost_collection,
                                                            p.amount as cost_payment
                                                      FROM distribution_management_payments as p)
                                                      WHERE %s
                                                      GROUP BY date, farm_id ORDER BY %s''' % (
        filters, order_by_maps.get(order_by, 'date DESC'))

        collections = EggCollections.objects.raw(query)
        total_records = len(list(collections))

        collections = collections[offset:limit]

        data = CollectionsAndPaymentsSerializer(collections, context={'request': request}, many=True).data

        return Response(data={'records': data, 'totalRecords': total_records}, status=status.HTTP_200_OK)

    @list_route(methods=['get'], url_path='sales/daily')
    def generate_daily_report(self, request, *args, **kwargs):
        report_data = {
            'summary': {},
            'sales_team_wise_summary': list()
        }
        query_params = request.query_params.dict()

        date = datetime.datetime.strptime(query_params.pop('date'), '%d-%m-%Y') \
            if 'date' in query_params else datetime.date.today()

        start_date = date
        end_date = date + datetime.timedelta(days=1)

        report_data['summary'] = self.generate_sales_summary(start_date, end_date)

        sales_teams = self.get_sales_teams().order_by('name')

        for st in sales_teams:
            data = {
                'sales_team': st.id,
                'sales_team_name': st.name,
                'summary': self.generate_sales_summary(start_date, end_date, {'sales_team': st.id})
            }
            report_data['sales_team_wise_summary'].append(data)

        return Response(report_data, status.HTTP_200_OK)

    def generate_sales_summary(self, start_date, end_date, query_params=dict()):
        summary = dict()
        common_filters = {
            'date__range': (start_date, end_date + datetime.timedelta(days=1))
        }

        if 'sales_team' in query_params:
            common_filters['sales_team__id'] = query_params.pop('sales_team')

        # Purchase aggregation
        purchase_summary = self.get_collections(**common_filters) \
            .aggregate(purchased_plates=Coalesce(Sum('no_of_plates'), 0),
                       cost_purchased=Coalesce(Sum('cost'), 0))

        # Sales aggregation
        sales_summary = self.get_sales(**common_filters) \
            .values('date') \
            .aggregate(sold_plates=Coalesce(Sum('sold_plates'), 0),
                       damaged_plates=Coalesce(Sum('damaged_plates'), 0),
                       cost_sales=Coalesce(Sum('cost'), 0),
                       cost_collected=Coalesce(Sum('cash_handovered'), 0),
                       cost_outstanding=Coalesce(Sum('outstanding'), 0),
                       cost_damaged=Coalesce(Sum('damaged_cost'), 0))

        # Stock aggregation
        stock_summary = self.get_stock(**common_filters).aggregate(unsold_plates=Coalesce(Sum('no_of_plates'), 0),
                                                                   cost_unsold=Coalesce(Sum('cost'), 0))

        # Transfers
        transfers = self.get_transfers(date__range=common_filters['date__range'])
        transfers_out = transfers
        transfers_in = transfers

        if 'sales_team__id' in common_filters:
            transfers_out = transfers_out.filter(transfer_from__id=common_filters['sales_team__id'])
            transfers_in = transfers_in.filter(transfer_to__id=common_filters['sales_team__id'])

        transfers_out = transfers_out.aggregate(transfer_out_plates=Coalesce(Sum('no_of_plates'), 0),
                                                cost_transfer_out=Coalesce(Sum(F('rate') * F('no_of_plates')), 0))
        transfers_in = transfers_in.aggregate(transfer_in_plates=Coalesce(Sum('no_of_plates'), 0),
                                              cost_transfer_in=Coalesce(Sum(F('rate') * F('no_of_plates')), 0))

        # File touches
        summary.update(purchase_summary)
        summary.update(sales_summary)
        summary.update(stock_summary)
        summary.update(transfers_out)
        summary.update(transfers_in)

        # Profit
        summary['cost_profit'] = summary['cost_sales'] + \
                                 summary['cost_unsold'] + \
                                 summary['cost_transfer_out'] - \
                                 summary['cost_purchased'] - \
                                 summary['cost_transfer_in']

        return summary
