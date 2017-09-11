from django.contrib.auth.decorators import permission_required
from django.utils.decorators import method_decorator
from rest_framework import permissions
from rest_framework import viewsets, status
from rest_framework.decorators import list_route, detail_route
from distribution_management.models import \
    EggFarms, SalesTeams, EggCollections, DemandTransfers
from distribution_management.serializers import \
    EggFarmsSerializer, SalesTeamsSerializer, EggCollectionsSerializer, DemandTransfersSerializer


# Create your views here.


@method_decorator(permission_required('distribution_management.view_eggfarms', raise_exception=True), name='list')
@method_decorator(permission_required('distribution_management.view_eggfarms', raise_exception=True), name='retrieve')
@method_decorator(permission_required('distribution_management.add_eggfarms', raise_exception=True), name='create')
@method_decorator(permission_required('distribution_management.change_eggfarms', raise_exception=True), name='update')
@method_decorator(permission_required('distribution_management.change_eggfarms', raise_exception=True),
                  name='partial_update')
@method_decorator(permission_required('distribution_management.delete_eggfarms', raise_exception=True),
                  name='destroy')
class EggFarmsViewSet(viewsets.ModelViewSet):
    permission_classes = (permissions.IsAuthenticated,)
    serializer_class = EggFarmsSerializer

    def get_queryset(self):
        queryset = EggFarms.objects.all()

        return queryset
    

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


@method_decorator(permission_required('distribution_management.view_eggcollections', raise_exception=True), name='list')
@method_decorator(permission_required('distribution_management.view_eggcollections', raise_exception=True), name='retrieve')
@method_decorator(permission_required('distribution_management.add_eggcollections', raise_exception=True), name='create')
@method_decorator(permission_required('distribution_management.change_eggcollections', raise_exception=True), name='update')
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
    

@method_decorator(permission_required('distribution_management.view_demandtransfers', raise_exception=True), name='list')
@method_decorator(permission_required('distribution_management.view_demandtransfers', raise_exception=True), name='retrieve')
@method_decorator(permission_required('distribution_management.add_demandtransfers', raise_exception=True), name='create')
@method_decorator(permission_required('distribution_management.change_demandtransfers', raise_exception=True), name='update')
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
