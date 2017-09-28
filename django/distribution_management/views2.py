from django.contrib.auth.decorators import permission_required
from django.utils.decorators import method_decorator
from rest_framework import permissions
from rest_framework import viewsets, status
from rest_framework.response import Response
from rest_framework.decorators import list_route, detail_route
from distribution_management.models import \
    SalesSummary, SalesSummaryItems, Payments, \
    SalesTeams, EggFarms
from distribution_management.serializers import \
    SalesSummarySerializer, PaymentsSerializer
from django.db.models import F

# Create your views here.


@method_decorator(permission_required('distribution_management.view_salessummary', raise_exception=True), name='list')
@method_decorator(permission_required('distribution_management.view_salessummary', raise_exception=True),
                  name='retrieve')
@method_decorator(permission_required('distribution_management.add_salessummary', raise_exception=True), name='create')
@method_decorator(permission_required('distribution_management.change_salessummary', raise_exception=True),
                  name='update')
@method_decorator(permission_required('distribution_management.change_salessummary', raise_exception=True),
                  name='partial_update')
@method_decorator(permission_required('distribution_management.delete_salessummary', raise_exception=True),
                  name='destroy')
class SalesSummaryViewSet(viewsets.ModelViewSet):
    permission_classes = (permissions.IsAuthenticated,)
    serializer_class = SalesSummarySerializer

    def get_queryset(self):
        queryset = SalesSummary.objects.all()

        return queryset

    def list(self, request, *args, **kwargs):
        queryset = self.get_queryset()
        query_params = request.query_params.dict()
        order_by_maps = {
            'sales_team_name': 'sales_team__name',
            '-sales_team_name': '-sales_team__name'
        }

        order_by = query_params.pop('order_by', '-date')
        offset = int(query_params.pop('offset', '0'))
        limit = int(query_params.pop('end', '10'))

        queryset = queryset.order_by(order_by_maps.get(order_by, order_by))
        serializer = self.serializer_class(queryset, many=True, context={'request': request})

        total_records = len(serializer.data)
        records = serializer.data[offset:limit]

        return Response(data={'totalRecords': total_records, 'records': records})

    @list_route(methods=['get'], url_path="form-data")
    def get_form_data(self, request, *args, **kwargs):
        data = dict()

        data['sales_teams'] = list(SalesTeams.objects.all()
                                   .annotate(text=F('name')).values('id', 'text'))

        return Response(data, status=status.HTTP_200_OK)


@method_decorator(permission_required('distribution_management.view_payments', raise_exception=True), name='list')
@method_decorator(permission_required('distribution_management.view_payments', raise_exception=True), name='retrieve')
@method_decorator(permission_required('distribution_management.add_payments', raise_exception=True), name='create')
@method_decorator(permission_required('distribution_management.change_payments', raise_exception=True), name='update')
@method_decorator(permission_required('distribution_management.change_payments', raise_exception=True),
                  name='partial_update')
@method_decorator(permission_required('distribution_management.delete_payments', raise_exception=True),
                  name='destroy')
class PaymentsViewSet(viewsets.ModelViewSet):
    permission_classes = (permissions.IsAuthenticated,)
    serializer_class = PaymentsSerializer

    def get_queryset(self):
        queryset = Payments.objects.all()

        return queryset

    def list(self, request, *args, **kwargs):
        queryset = self.get_queryset()
        query_params = request.query_params.dict()
        order_by_maps = {
            'farm_name': 'farm__name',
            '-farm_name': '-farm__name'
        }

        order_by = query_params.pop('order_by', '-date')
        offset = int(query_params.pop('offset', '0'))
        limit = int(query_params.pop('end', '10'))

        queryset = queryset.order_by(order_by_maps.get(order_by, order_by))
        serializer = self.serializer_class(queryset, many=True, context={'request': request})

        total_records = len(serializer.data)
        records = serializer.data[offset:limit]

        return Response(data={'totalRecords': total_records, 'records': records})

    @list_route(methods=['get'], url_path="form-data")
    def get_form_data(self, request, *args, **kwargs):
        data = dict()

        data['farms'] = list(EggFarms.objects.all()
                             .annotate(text=F('name')).values('id', 'text'))

        return Response(data, status=status.HTTP_200_OK)
