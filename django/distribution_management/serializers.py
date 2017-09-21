from rest_framework import serializers
from distribution_management.models import \
    EggFarms, SalesTeams, EggCollections, \
    DemandTransfers, SalesSummary, SalesSummaryItems, Payments
from django.db.models import Sum, F


class EggFarmsSerializer(serializers.ModelSerializer):
    created_at = serializers.DateTimeField(source='history.last.history_date', read_only=True)
    created_by = serializers.PrimaryKeyRelatedField(source='history.last.history_user_id', read_only=True)
    modified_at = serializers.DateTimeField(source='history.first.history_date', read_only=True)
    modified_by = serializers.PrimaryKeyRelatedField(source='history.first.history_user_id', read_only=True)

    class Meta:
        model = EggFarms
        fields = ('id', 'name', 'description', 'address', 'logo',
                  'created_at', 'created_by', 'modified_at', 'modified_by')


class SalesTeamsSerializer(serializers.ModelSerializer):
    created_at = serializers.DateTimeField(source='history.last.history_date', read_only=True)
    created_by = serializers.PrimaryKeyRelatedField(source='history.last.history_user_id', read_only=True)
    modified_at = serializers.DateTimeField(source='history.first.history_date', read_only=True)
    modified_by = serializers.PrimaryKeyRelatedField(source='history.first.history_user_id', read_only=True)

    class Meta:
        model = SalesTeams
        fields = ('id', 'name', 'description',
                  'created_at', 'created_by', 'modified_at', 'modified_by')


class EggCollectionsSerializer(serializers.ModelSerializer):
    created_at = serializers.DateTimeField(source='history.last.history_date', read_only=True)
    created_by = serializers.PrimaryKeyRelatedField(source='history.last.history_user_id', read_only=True)
    modified_at = serializers.DateTimeField(source='history.first.history_date', read_only=True)
    modified_by = serializers.PrimaryKeyRelatedField(source='history.first.history_user_id', read_only=True)

    farm_name = serializers.CharField(source='farm.name', read_only=True)
    sales_team_name = serializers.CharField(source='sales_team.name', read_only=True)
    date = serializers.DateField(format='%d-%m-%Y', input_formats=['iso-8601', '%d-%m-%Y'])

    class Meta:
        model = EggCollections
        fields = ('id', 'date', 'farm', 'farm_name', 'rate', 'sales_team', 'sales_team_name', 'no_of_plates',
                  'created_at', 'created_by', 'modified_at', 'modified_by')


class DemandTransfersSerializer(serializers.ModelSerializer):
    created_at = serializers.DateTimeField(source='history.last.history_date', read_only=True)
    created_by = serializers.PrimaryKeyRelatedField(source='history.last.history_user_id', read_only=True)
    modified_at = serializers.DateTimeField(source='history.first.history_date', read_only=True)
    modified_by = serializers.PrimaryKeyRelatedField(source='history.first.history_user_id', read_only=True)

    transfer_from_name = serializers.CharField(source='transfer_from.name', read_only=True)
    transfer_to_name = serializers.CharField(source='transfer_to.name', read_only=True)
    date = serializers.DateField(format='%d-%m-%Y', input_formats=['iso-8601', '%d-%m-%Y'])

    class Meta:
        model = DemandTransfers
        fields = (
            'id', 'date', 'transfer_from', 'transfer_from_name', 'transfer_to', 'transfer_to_name', 'no_of_plates',
            'created_at', 'created_by', 'modified_at', 'modified_by')


class SalesSummaryItemsSerializer(serializers.ModelSerializer):
    id = serializers.IntegerField(required=False)
    cost = serializers.SerializerMethodField()

    class Meta:
        model = SalesSummaryItems
        fields = ('id', 'summary', 'rate', 'no_of_plates', 'cost')
        read_only_fields = ('summary',)

    def get_cost(self, instance):
        return instance.rate * instance.no_of_plates


class SalesSummarySerializer(serializers.ModelSerializer):
    created_at = serializers.DateTimeField(source='history.last.history_date', read_only=True)
    created_by = serializers.PrimaryKeyRelatedField(source='history.last.history_user_id', read_only=True)
    modified_at = serializers.DateTimeField(source='history.first.history_date', read_only=True)
    modified_by = serializers.PrimaryKeyRelatedField(source='history.first.history_user_id', read_only=True)

    sales_team_name = serializers.CharField(source='sales_team.name', read_only=True)
    rates = SalesSummaryItemsSerializer(many=True)
    date = serializers.DateField(format='%d-%m-%Y', input_formats=['iso-8601', '%d-%m-%Y'])
    total_plates = serializers.SerializerMethodField()
    total_cost = serializers.SerializerMethodField()
    total_outstanding = serializers.SerializerMethodField()

    class Meta:
        model = SalesSummary
        fields = ('id', 'date', 'sales_team', 'sales_team_name', 'damaged_plates',
                  'cash_handovered', 'rates', 'total_plates', 'total_cost', 'total_outstanding',
                  'created_at', 'created_by', 'modified_at', 'modified_by')

    def create(self, validated_data):
        rates = validated_data.pop('rates', None)
        instance = super(SalesSummarySerializer, self).create(validated_data=validated_data)

        if rates:
            rates = self.create_or_update_rates(instance=instance, rates=rates)

        return instance

    def update(self, instance, validated_data):
        rates = validated_data.pop('rates', None)
        if rates:
            rates = self.create_or_update_rates(instance=instance, rates=rates)

        return super(SalesSummarySerializer, self).update(instance=instance, validated_data=validated_data)

    def create_or_update_rates(self, instance, rates=list()):
        for rate in rates:
            rate['summary'] = instance

        rates_serializer = SalesSummaryItemsSerializer(data=rates, many=True,
                                                       context={'request': self.context['request']})
        rates_serializer.is_valid(raise_exception=True)

        model_class = rates_serializer._kwargs['child'].Meta.model
        record_ids = list()
        for record in rates_serializer.validated_data:
            if 'id' in record:
                rate = model_class.objects.get(pk=record.pop('id'))
                rate.__dict__.update(summary=instance, **record)
                rate.save()
                record_ids.append(rate.pk)
            else:
                rate = model_class.objects.create(summary=instance, **record)
                record_ids.append(rate.pk)

        """ Deleting omitted records """
        deleted_records = instance.rates.exclude(id__in=record_ids)
        if deleted_records.exists():
            deleted_records.delete()

        serializer = SalesSummaryItemsSerializer(model_class.objects.filter(pk__in=record_ids), many=True,
                                                 context={'request': self.context['request']})

        return serializer.data

    def get_total_plates(self, instance):

        return instance.rates \
            .aggregate(Sum('no_of_plates')).get('no_of_plates__sum', 0)

    def get_total_cost(self, instance):
        """ Total cost aggregation """
        return instance.rates \
            .annotate(cost=F('rate') * F('no_of_plates')) \
            .aggregate(Sum('cost')).get('cost__sum', 0)

    def get_total_outstanding(self, instance):
        total_cost = instance.rates \
            .annotate(cost=F('rate') * F('no_of_plates')) \
            .aggregate(Sum('cost')).get('cost__sum', 0)

        return float(total_cost) - float(instance.cash_handovered)


class PaymentsSerializer(serializers.ModelSerializer):
    created_at = serializers.DateTimeField(source='history.last.history_date', read_only=True)
    created_by = serializers.PrimaryKeyRelatedField(source='history.last.history_user_id', read_only=True)
    modified_at = serializers.DateTimeField(source='history.first.history_date', read_only=True)
    modified_by = serializers.PrimaryKeyRelatedField(source='history.first.history_user_id', read_only=True)

    farm_name = serializers.CharField(source='farm.name', read_only=True)
    date = serializers.DateField(format='%d-%m-%Y', input_formats=['iso-8601', '%d-%m-%Y'])

    class Meta:
        model = Payments
        fields = ('id', 'date', 'farm', 'farm_name', 'amount',
                  'created_at', 'created_by', 'modified_at', 'modified_by')
