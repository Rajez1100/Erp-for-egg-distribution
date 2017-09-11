import datetime

from django.contrib.auth.decorators import permission_required
from django.contrib.auth.models import Group
from django.db.models import Q
from django.utils.decorators import method_decorator
from rest_framework import permissions
from rest_framework import viewsets, status
from rest_framework.decorators import list_route
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework_jwt.serializers import VerifyJSONWebTokenSerializer
from rest_framework_jwt.settings import api_settings

from generics.Mailer import Mailer
from generics.custom_exceptions import CustomValidationErr
from users.defaults import AppDefaults
from users.models import EDUser, PasswordResetTokens
from users.serializers import UsersSerializer, GroupSerializer


def jwt_response_payload_handler(token, user=None, request=None):
    """ Modifying jwt login response details """
    user_details = UsersSerializer(user, context={'request': request}).data

    """ Fetching assigned accesses for the use """
    user_details['accesses'] = list()

    if user.is_superuser:
        user_details['accesses'] = AppDefaults.get_predefined_role_access_specifiers('Admin')
    else:
        access_joined = user.groups.all().values_list('details__accesses', flat=True)
        for string in access_joined:
            if string is not None:
                user_details['accesses'] += string.split(',')
        user_details['accesses'] = list(set(user_details['accesses']))

    user_details['accesses'] = sorted(user_details['accesses'])

    return {
        'token': token,
        'user': user_details
    }


@method_decorator(permission_required('users.view_eduser', raise_exception=True), name='list')
@method_decorator(permission_required('users.view_eduser', raise_exception=True), name='retrieve')
@method_decorator(permission_required('users.add_eduser', raise_exception=True), name='create')
@method_decorator(permission_required('users.change_eduser', raise_exception=True), name='update')
@method_decorator(permission_required('users.change_eduser', raise_exception=True), name='partial_update')
@method_decorator(permission_required('users.delete_eduser', raise_exception=True), name='destroy')
class UsersViewSet(viewsets.ModelViewSet):
    permission_classes = (permissions.IsAuthenticated,)
    queryset = EDUser.objects.all()
    serializer_class = UsersSerializer

    def get_queryset(self):
        user = self.request.user
        queryset = EDUser.objects.none()
        if user.is_superuser:
            query_set = EDUser.objects.all()
        else:
            query_set = queryset.filter(profile__created_by=user)
        return query_set

    @list_route(methods=['post'], url_path='change-password')
    def change_password(self, request):
        user = self.request.user
        old_password = request.data['old_password']
        from django.contrib.auth import authenticate
        credentials = {
           'username': user.username,
           'password': old_password
        }
        user = authenticate(**credentials)
        if user:
            user.set_password(request.data['password'])
            user.save()
            
            return Response({'suc_msg': "Your Password changed"})
        else:
            return Response({'msg': "Your old password was entered incorrectly"})


@method_decorator(permission_required('auth.view_group', raise_exception=True), name='list')
@method_decorator(permission_required('auth.view_group', raise_exception=True), name='retrieve')
@method_decorator(permission_required('auth.add_group', raise_exception=True), name='create')
@method_decorator(permission_required('auth.change_group', raise_exception=True), name='update')
@method_decorator(permission_required('auth.change_group', raise_exception=True), name='partial_update')
@method_decorator(permission_required('auth.delete_group', raise_exception=True), name='destroy')
class GroupsViewSet(viewsets.ModelViewSet):
    permission_classes = (permissions.IsAuthenticated,)
    serializer_class = GroupSerializer

    def get_queryset(self):
        user = self.request.user
        queryset = Group.objects.none()
        if user.is_superuser:
            queryset = Group.objects.filter((Q(details__created_by=user) | Q(details__created_by=None)))
        else:
            queryset = Group.objects.filter(details__created_by=user)
        return queryset.order_by('details__alias')


class PasswordReset(APIView):
    """ Generates password reset token and reset link """
    permission_classes = (permissions.AllowAny,)

    def post(self, request, *args, **kwargs):
        data = request.data

        """ Checking is user exists for the provided username """
        if not EDUser.objects.filter(username=data['username']).exists():
            raise CustomValidationErr("Username doesn't exists.")

        user = EDUser.objects.get(username=data['username'])

        """ Verifying users email """
        if user.email != data['email']:
            email = user.email

            last = len(user.email) - 1
            at_sign_position = email.index('@')
            dot_position = email.index('.')

            email_hint = '%s%s%s%s%s' % (
                email[0:2],
                '*' * len(email[2:at_sign_position]),
                email[at_sign_position:(at_sign_position + 2)],
                '*' * (dot_position - (at_sign_position + 2)),
                email[dot_position:(last + 1)]
            )
            raise CustomValidationErr("Email couldn't match with username. Hint: %s" % email_hint)

        """ Generating token for password reset link """
        jwt_payload_handler = api_settings.JWT_PAYLOAD_HANDLER
        jwt_encode_handler = api_settings.JWT_ENCODE_HANDLER

        payload = jwt_payload_handler(user)
        """ Setting expiration time """
        payload['exp'] = datetime.datetime.now() + datetime.timedelta(days=1)
        token = jwt_encode_handler(payload)

        """ Storing token for future reference """
        session = PasswordResetTokens.objects.create(user=user, token=token)
        session.save()

        Mailer.send_mail(
            subject='REDINGTON: Password reset link',
            recipients=[user.email],
            template_name='password_resetting.html',
            template_data={
                'user': user.__dict__,
                'reset_link': '%s?tk=%s' % (data['base_path'], token)
            }
        )

        return Response({'msg': "Reset link sent successfully", 'email': user.email})


class PasswordResetVerify(APIView):
    """ Verifies password reset token """
    permission_classes = (permissions.AllowAny,)
    serializer_class = VerifyJSONWebTokenSerializer

    def post(self, request, *args, **kwargs):
        data = request.data
        serializer = self.serializer_class(data=request.data)

        if serializer.is_valid():
            if PasswordResetTokens.objects.filter(token=data['token']).exists():
                return Response(data['token'])
            else:
                raise CustomValidationErr('It seems that link has been used already.')

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class PasswordResetConfirm(APIView):
    """ Changes user password """
    permission_classes = (permissions.IsAuthenticated,)

    def post(self, request, *args, **kwargs):
        user = request.user
        data = request.data

        """ Updating password """
        user.set_password(data['password'])
        user.save()

        """ Removing token from password reset session after changing password """
        session = PasswordResetTokens.objects.filter(user=user)
        session.delete()

        Mailer.send_mail(
            subject='REDINGTON: Password changed',
            recipients=[user.email],
            template_name='password_changed.html',
            template_data={
                'user': user.__dict__
            }
        )

        serializer = UsersSerializer(user, context={'request': request})
        return Response(serializer.data)

api_password_reset = PasswordReset.as_view()
api_password_reset_verify = PasswordResetVerify.as_view()
api_password_reset_confirm = PasswordResetConfirm.as_view()