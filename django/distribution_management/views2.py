from django.contrib.auth.decorators import permission_required
from django.utils.decorators import method_decorator
from rest_framework import permissions
from rest_framework import viewsets, status
from rest_framework.decorators import list_route, detail_route
from distribution_management.models import \
    SalesSummary, SalesSummaryItems, Payments
from distribution_management.serializers import \
    SalesSummarySerializer, PaymentsSerializer


# Create your views here.


@method_decorator(permission_required('distribution_management.view_salessummary', raise_exception=True), name='list')
@method_decorator(permission_required('distribution_management.view_salessummary', raise_exception=True), name='retrieve')
@method_decorator(permission_required('distribution_management.add_salessummary', raise_exception=True), name='create')
@method_decorator(permission_required('distribution_management.change_salessummary', raise_exception=True), name='update')
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
