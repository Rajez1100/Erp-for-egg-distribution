from rest_framework import routers
from users.views import UsersViewSet, GroupsViewSet
from distribution_management.views import \
    EggFarmsViewSet, SalesTeamsViewSet, EggCollectionsViewSet, DemandTransfersViewSet
from distribution_management.views2 import \
    SalesSummaryViewSet, PaymentsViewSet

# Defining Router
distribution_management_router = routers.DefaultRouter()

distribution_management_router.register(r'users', UsersViewSet)
distribution_management_router.register(r'roles', GroupsViewSet, 'group')
distribution_management_router.register(r'egg-farms', EggFarmsViewSet, 'eggfarms')
distribution_management_router.register(r'egg-collections', EggCollectionsViewSet, 'eggcollections')
distribution_management_router.register(r'demand-transfers', DemandTransfersViewSet, 'demandtransfers')
distribution_management_router.register(r'sales-teams', SalesTeamsViewSet, 'salesteams')
distribution_management_router.register(r'sales-summary', SalesSummaryViewSet, 'salessummary')
distribution_management_router.register(r'payments', PaymentsViewSet, 'payments')
