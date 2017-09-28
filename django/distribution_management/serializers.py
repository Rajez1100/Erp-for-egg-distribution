from rest_framework import serializers
from distribution_management.models import \
    EggFarms, SalesTeams, EggCollections, \
    DemandTransfers, SalesSummary, SalesSummaryItems, Payments, \
    DailyStocks
from django.db.models import Sum, F, Avg
from django.db.models.functions import Coalesce
from distribution_management.auto_generations import update_daily_stock
import datetime


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
                  'created_at', 'created_by', 'modified_at', 'modified_by', 'cost')
        read_only_fields = ('cost',)

    def create(self, validated_data):
        instance = super(EggCollectionsSerializer, self).create(validated_data=validated_data)

        instance.cost = instance.rate * instance.no_of_plates
        instance.save()

        # Stock calculation
        update_daily_stock(sales_team=instance.sales_team, date=instance.date)

        return instance

    def update(self, instance, validated_data):
        instance = super(EggCollectionsSerializer, self).update(instance=instance,
                                                                validated_data=validated_data)

        instance.cost = instance.rate * instance.no_of_plates
        instance.save()

        # Stock calculation
        update_daily_stock(sales_team=instance.sales_team, date=instance.date)

        return instance


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

    def create(self, validated_data):
        instance = super(DemandTransfersSerializer, self).create(validated_data=validated_data)

        self.update_transfer_rate(instance)

        # Stock calculation
        update_daily_stock(sales_team=instance.transfer_from, date=instance.date,  mode='TRANSFER_IN', avg_rate=instance.rate)
        update_daily_stock(sales_team=instance.transfer_to, date=instance.date,  mode='TRANSFER_IN', avg_rate=instance.rate)

        return instance

    def update(self, instance, validated_data):
        instance = super(DemandTransfersSerializer, self).update(instance, validated_data)

        self.update_transfer_rate(instance)

        # Stock calculation
        update_daily_stock(sales_team=instance.transfer_from, date=instance.date, mode='TRANSFER_IN', avg_rate=instance.rate)
        update_daily_stock(sales_team=instance.transfer_to, date=instance.date,  mode='TRANSFER_IN', avg_rate=instance.rate)

        return instance

    def update_transfer_rate(self, instance):
        purchase_date_of_transfer = instance.transfer_from.eggcollections.filter(date__lte=instance.date).order_by(
            '-date').first()

        avg_rate = instance.transfer_from.eggcollections.filter(date=purchase_date_of_transfer.date) \
            .aggregate(rate__avg=Avg('rate'))['rate__avg'] if purchase_date_of_transfer else None

        instance.rate = avg_rate if avg_rate else instance.rate
        instance.save()

        return instance


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
    total_plates = serializers.IntegerField(source='sold_plates', read_only=True)
    total_cost = serializers.DecimalField(source='cost', max_digits=10, decimal_places=2, read_only=True)
    total_outstanding = serializers.DecimalField(source='outstanding', max_digits=10,
                                                 decimal_places=2, read_only=True)

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

        return self.update_calculated_fields(instance=instance)

    def update(self, instance, validated_data):
        rates = validated_data.pop('rates', None)
        if rates:
            rates = self.create_or_update_rates(instance=instance, rates=rates)

        instance = super(SalesSummarySerializer, self).update(instance=instance, validated_data=validated_data)

        return self.update_calculated_fields(instance=instance)

    def create_or_update_rates(self, instance, rates=list()):
        for rate in rates:
            rate['summary'] = instance

        rates_serializer = SalesSummaryItemsSerializer(data=rates, many=True,
                                                       context={'request': self.context['request']})
        rates_serializer.is_valid(raise_exception=True)

        model_class = rates_serializer._kwargs['child'].Meta.model
        record_ids = list()
        for record in rates_serializer.validated_data:
            record['cost'] = record['rate'] * record['no_of_plates']

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

    def update_calculated_fields(self, instance):

        agg = instance.rates.aggregate(Sum('cost'), Sum('no_of_plates'))
        instance.sold_plates = agg['no_of_plates__sum']
        instance.cost = agg['cost__sum']
        instance.outstanding = instance.cost - instance.cash_handovered

        # Damage cost calculation
        rates = list()
        rates += list(instance.sales_team.eggcollections.filter(date=instance.date).values_list('rate', flat=True))
        rates += list(instance.sales_team.demandtransfers_in.filter(date=instance.date).values_list('rate', flat=True))

        stock = instance.sales_team.dailystocks.filter(date__lt=instance.date).order_by('-date').first()

        if stock and stock.no_of_plates > 0:
            rates.append(stock.rate)

        instance.damaged_cost = float(instance.damaged_plates) * float(sum(rates)) / max(len(rates), 1)

        instance.save()

        # Stock calculation
        update_daily_stock(sales_team=instance.sales_team, date=instance.date)

        return instance


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


class CollectionsAndPaymentsSerializer(serializers.ModelSerializer):

    def to_representation(self, instance):
        primitive_repr = super(CollectionsAndPaymentsSerializer, self).to_representation(instance)

        primitive_repr['date'] = instance.date
        primitive_repr['farm_id'] = instance.farm_id
        primitive_repr['farm_name'] = instance.farm.name
        primitive_repr['plates_collection'] = instance.plates_collection
        primitive_repr['cost_collection'] = instance.cost_collection
        primitive_repr['cost_payment'] = instance.cost_payment

        return primitive_repr

    class Meta:
        model = EggCollections
        fields = ('farm_id',)