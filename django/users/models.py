from django.contrib.auth.models import AbstractUser, Group
from django.db import models
from django.conf import settings
from django.core.validators import validate_comma_separated_integer_list
from simple_history.models import HistoricalRecords


class EDUser(AbstractUser):
    pass


USER_TYPE_CHOICES = (
    ('A', 'Admin'),
)


class UserProfile(models.Model):
    user = models.OneToOneField(settings.AUTH_USER_MODEL, related_name='profile', on_delete=models.CASCADE)
    user_type = models.CharField(max_length=5, choices=USER_TYPE_CHOICES)
    flat_no = models.CharField(max_length=10, null=True)
    address_line1 = models.CharField(max_length=255, null=True)
    address_line2 = models.CharField(max_length=255, null=True)
    city = models.CharField(max_length=50, null=True)
    state = models.CharField(max_length=50, null=True)
    pin_code = models.PositiveIntegerField(null=True)
    description = models.CharField(max_length=100, null=True)
    created_by = models.ForeignKey(settings.AUTH_USER_MODEL, related_name='created_by')
    created_at = models.DateTimeField(auto_now_add=True)
    role_id = models.CharField(max_length=100, validators=[validate_comma_separated_integer_list], null=True)
    history = HistoricalRecords()


class Roles(models.Model):
    group = models.OneToOneField(Group, related_name='details', on_delete=models.CASCADE)
    alias = models.CharField(max_length=50)
    accesses = models.TextField(null=True)
    description = models.TextField(null=True)
    created_by = models.ForeignKey(EDUser, to_field='id', null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    history = HistoricalRecords()


class PasswordResetTokens(models.Model):
    user = models.ForeignKey(EDUser, related_name="+")
    token = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
