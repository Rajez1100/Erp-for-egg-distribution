from django.db import models
from django.dispatch import receiver
from simple_history.models import HistoricalRecords
import os
from datetime import datetime


def define_egg_farm_logo_root(instance, filename):

    return os.path.join('egg_farms_logo',
                        '{}-{}'.format(datetime.now().strftime('%Y-%m-%d-%H-%M-%S'),
                                       filename))


# Create your models here.


class EggFarms(models.Model):
    name = models.CharField(max_length=50)
    description = models.TextField(null=True, blank=True)
    address = models.TextField(null=True, blank=True)
    logo = models.FileField(upload_to=define_egg_farm_logo_root, null=True, blank=True)
    history = HistoricalRecords()

    def save(self, *args, **kwargs):
        """ Delete previous logo on update """
        try:
            existing = EggFarms.objects.get(id=self.id)

            if existing.logo != self.logo:
                existing.logo.delete(save=False)

        except Exception as e:
            print("On pre save EggFarms :", e)

        return super(EggFarms, self).save(*args, **kwargs)

    def delete(self, *args, **kwargs):
        """ Delete logo on delete """
        try:
            self.logo.delete(save=False)
        except Exception as e:
            print("On pre delete EggFarms :", e)

        return super(EggFarms, self).delete(*args, **kwargs)


class SalesTeams(models.Model):
    name = models.CharField(max_length=50)
    description = models.TextField(null=True, blank=True)
    history = HistoricalRecords()


class EggCollections(models.Model):
    date = models.DateField()
    farm = models.ForeignKey(EggFarms, related_name='eggcollections')
    rate = models.DecimalField(max_digits=10, decimal_places=2, default=0)
    sales_team = models.ForeignKey(SalesTeams, related_name='eggcollections')
    no_of_plates = models.IntegerField(default=0)
    cost = models.DecimalField(max_digits=10, decimal_places=2, default=0)
    history = HistoricalRecords()


class SalesSummary(models.Model):
    date = models.DateField()
    sales_team = models.ForeignKey(SalesTeams, related_name='salessummary')
    sold_plates = models.IntegerField(default=0)
    damaged_plates = models.DecimalField(max_digits=10, decimal_places=2, default=0)
    damaged_cost = models.DecimalField(max_digits=10, decimal_places=2, default=0)
    cost = models.DecimalField(max_digits=10, decimal_places=2, default=0)
    cash_handovered = models.DecimalField(max_digits=20, decimal_places=2, default=0)
    outstanding = models.DecimalField(max_digits=10, decimal_places=2, default=0)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    history = HistoricalRecords()


class SalesSummaryItems(models.Model):
    summary = models.ForeignKey(SalesSummary, related_name='rates')
    rate = models.DecimalField(max_digits=10, decimal_places=2, default=0)
    no_of_plates = models.IntegerField(default=0)
    cost = models.DecimalField(max_digits=10, decimal_places=2, default=0)


class DemandTransfers(models.Model):
    date = models.DateField()
    transfer_from = models.ForeignKey(SalesTeams, related_name='demandtransfers_out')
    transfer_to = models.ForeignKey(SalesTeams, related_name='demandtransfers_in')
    rate = models.DecimalField(max_digits=10, decimal_places=2, default=0)
    no_of_plates = models.IntegerField(default=0)
    history = HistoricalRecords()


class Payments(models.Model):
    date = models.DateField()
    farm = models.ForeignKey(EggFarms, related_name='payments')
    amount = models.DecimalField(max_digits=20, decimal_places=2, default=0)
    history = HistoricalRecords()


class DailyStocks(models.Model):
    date = models.DateField()
    sales_team = models.ForeignKey(SalesTeams, related_name='dailystocks')
    no_of_plates = models.IntegerField(default=0)
    rate = models.DecimalField(max_digits=20, decimal_places=2, default=0)
    cost = models.DecimalField(max_digits=20, decimal_places=2, default=0)
    created_st = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    history = HistoricalRecords()

