from django.apps import AppConfig
from django.db.models.signals import post_migrate


def add_list_and_view_permissions(sender, **kwargs):
    """
       This takes care of adding a view permission too all our
       content types on migration.
    """
    from django.contrib.auth.models import Permission
    from django.contrib.contenttypes.models import ContentType

    def check_and_add_permission(permission, content_type):
        # Generate permission codename
        codename = "%s_%s" % (permission, content_type.model)

        # Check for permission
        if not Permission.objects.filter(codename=codename):
            # Add permission
            permission = Permission.objects.create(
                content_type=content_type,
                codename=codename,
                name='Can %s %s' % (permission, content_type.name)
            )

            print('Added %s permission for %s' % (permission, content_type.model))

    # For each content types
    for content_type in ContentType.objects.all():
        # List permission
        check_and_add_permission('list', content_type)
        # View permission
        check_and_add_permission('view', content_type)

from django.apps import AppConfig


class DistributionManagementConfig(AppConfig):
    name = 'distribution_management'
