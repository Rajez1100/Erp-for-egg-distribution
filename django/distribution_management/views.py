from django.contrib.auth.decorators import permission_required
from django.utils.decorators import method_decorator
from rest_framework import permissions
from rest_framework import viewsets, status
from rest_framework.response import Response
from rest_framework.decorators import list_route, detail_route
from distribution_management.models import \
    EggFarms, SalesTeams, EggCollections, DemandTransfers
from distribution_management.serializers import \
    EggFarmsSerializer, SalesTeamsSerializer, EggCollectionsSerializer, DemandTransfersSerializer
from django.db.models import F


# Create your views here.


@method_decorator(permission_required('distribution_management.view_eggtransfer_froms', raise_exception=True),
                  name='list')
@method_decorator(permission_required('distribution_management.view_eggtransfer_froms', raise_exception=True),
                  name='retrieve')
@method_decorator(permission_required('distribution_management.add_eggtransfer_froms', raise_exception=True),
                  name='create')
@method_decorator(permission_required('distribution_management.change_eggtransfer_froms', raise_exception=True),
                  name='update')
@method_decorator(permission_required('distribution_management.change_eggtransfer_froms', raise_exception=True),
                  name='partial_update')
@method_decorator(permission_required('distribution_management.delete_eggtransfer_froms', raise_exception=True),
                  name='destroy')
class EggFarmsViewSet(viewsets.ModelViewSet):
    permission_classes = (permissions.IsAuthenticated,)
    serializer_class = EggFarmsSerializer

    def get_queryset(self):
        queryset = EggFarms.objects.all()

        return queryset

    def list(self, request, *args, **kwargs):
        queryset = self.get_queryset()
        query_params = request.query_params.dict()

        order_by = query_params.pop('order_by', 'name')
        offset = int(query_params.pop('offset', '0'))
        limit = int(query_params.pop('end', '10'))

        queryset = queryset.order_by(order_by)
        serializer = self.serializer_class(queryset, many=True, context={'request': request})

        total_records = len(serializer.data)
        records = serializer.data[offset:limit]

        return Response(data={'totalRecords': total_records, 'records': records})


@method_decorator(permission_required('distribution_management.view_salesteams', raise_exception=True), name='list')
@method_decorator(permission_required('distribution_management.view_salesteams', raise_exception=True), name='retrieve')
@method_decorator(permission_required('distribution_management.add_salesteams', raise_exception=True), name='create')
@method_decorator(permission_required('distribution_management.change_salesteams', raise_exception=True), name='update')
@method_decorator(permission_required('distribution_management.change_salesteams', raise_exception=True),
                  name='partial_update')
@method_decorator(permission_required('distribution_management.delete_salesteams', raise_exception=True),
                  name='destroy')
class SalesTeamsViewSet(viewsets.ModelViewSet):
    permission_classes = (permissions.IsAuthenticated,)
    serializer_class = SalesTeamsSerializer

    def get_queryset(self):
        queryset = SalesTeams.objects.all()

        return queryset

    def list(self, request, *args, **kwargs):
        queryset = self.get_queryset()
        query_params = request.query_params.dict()

        order_by = query_params.pop('order_by', 'name')
        offset = int(query_params.pop('offset', '0'))
        limit = int(query_params.pop('end', '10'))

        queryset = queryset.order_by(order_by)
        serializer = self.serializer_class(queryset, many=True, context={'request': request})

        total_records = len(serializer.data)
        records = serializer.data[offset:limit]

        return Response(data={'totalRecords': total_records, 'records': records})


@method_decorator(permission_required('distribution_management.view_eggcollections', raise_exception=True), name='list')
@method_decorator(permission_required('distribution_management.view_eggcollections', raise_exception=True),
                  name='retrieve')
@method_decorator(permission_required('distribution_management.add_eggcollections', raise_exception=True),
                  name='create')
@method_decorator(permission_required('distribution_management.change_eggcollections', raise_exception=True),
                  name='update')
@method_decorator(permission_required('distribution_management.change_eggcollections', raise_exception=True),
                  name='partial_update')
@method_decorator(permission_required('distribution_management.delete_eggcollections', raise_exception=True),
                  name='destroy')
class EggCollectionsViewSet(viewsets.ModelViewSet):
    permission_classes = (permissions.IsAuthenticated,)
    serializer_class = EggCollectionsSerializer

    def get_queryset(self):
        queryset = EggCollections.objects.all()

        return queryset

    def list(self, request, *args, **kwargs):
        queryset = self.get_queryset()
        query_params = request.query_params.dict()
        order_by_maps = {
            'transfer_from_name': 'transfer_from__name',
            '-transfer_from_name': '-transfer_from__name',
            'transfer_to_name': 'transfer_to__name',
            '-transfer_to_name': '-transfer_to__name'
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
    def get_form_data(self, request, *args,**kwargs):
        data = dict()

        data['farms'] = list(EggFarms.objects.all()
                             .annotate(text=F('name')).values('id', 'text'))
        data['sales_teams'] = list(SalesTeams.objects.all()
                                   .annotate(text=F('name')).values('id', 'text'))

        return Response(data, status=status.HTTP_200_OK)


@method_decorator(permission_required('distribution_management.view_demandtransfers', raise_exception=True),
                  name='list')
@method_decorator(permission_required('distribution_management.view_demandtransfers', raise_exception=True),
                  name='retrieve')
@method_decorator(permission_required('distribution_management.add_demandtransfers', raise_exception=True),
                  name='create')
@method_decorator(permission_required('distribution_management.change_demandtransfers', raise_exception=True),
                  name='update')
@method_decorator(permission_required('distribution_management.change_demandtransfers', raise_exception=True),
                  name='partial_update')
@method_decorator(permission_required('distribution_management.delete_demandtransfers', raise_exception=True),
                  name='destroy')
class DemandTransfersViewSet(viewsets.ModelViewSet):
    permission_classes = (permissions.IsAuthenticated,)
    serializer_class = DemandTransfersSerializer

    def get_queryset(self):
        queryset = DemandTransfers.objects.all()

        return queryset

    def list(self, request, *args, **kwargs):
        queryset = self.get_queryset()
        query_params = request.query_params.dict()
        order_by_maps = {
            'transfer_from_name': 'transfer_from__name',
            '-transfer_from_name': '-transfer_from__name',
            'transfer_to_name': 'transfer_to__name',
            '-transfer_to_name': '-transfer_to__name'
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
    def get_form_data(self, request, *args,**kwargs):
        data = dict()

        data['sales_teams'] = list(SalesTeams.objects.all()
                                   .annotate(text=F('name')).values('id', 'text'))

        return Response(data, status=status.HTTP_200_OK)
