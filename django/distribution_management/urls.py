from rest_framework import routers
from users.views import UsersViewSet, GroupsViewSet

# Defining Router
distribution_management_router = routers.DefaultRouter()

distribution_management_router.register(r'users', UsersViewSet)
distribution_management_router.register(r'roles', GroupsViewSet, 'group')
