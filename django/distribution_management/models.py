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
    farm = models.ForeignKey(EggFarms)
    rate = models.DecimalField(max_digits=10, decimal_places=2)
    sales_team = models.ForeignKey(SalesTeams)
    no_of_plates = models.IntegerField()
    history = HistoricalRecords()


class SalesSummary(models.Model):
    date = models.DateField()
    sales_team = models.ForeignKey(SalesTeams)
    damaged_plates = models.DecimalField(max_digits=10, decimal_places=2, null=True)
    cash_handovered = models.DecimalField(max_digits=20, decimal_places=2, null=True)
    history = HistoricalRecords()


class SalesSummaryItems(models.Model):
    summary = models.ForeignKey(SalesSummary, related_name='rates')
    rate = models.DecimalField(max_digits=10, decimal_places=2)
    no_of_plates = models.IntegerField()


class DemandTransfers(models.Model):
    date = models.DateField()
    transfer_from = models.ForeignKey(SalesTeams, related_name='demandtransfers_out')
    transfer_to = models.ForeignKey(SalesTeams, related_name='demandtransfers_in')
    no_of_plates = models.IntegerField()
    history = HistoricalRecords()


class Payments(models.Model):
    date = models.DateField()
    farm = models.ForeignKey(EggFarms)
    amount = models.DecimalField(max_digits=20, decimal_places=2)
    history = HistoricalRecords()

