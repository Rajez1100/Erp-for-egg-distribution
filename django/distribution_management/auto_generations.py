from django.db.models import F, Sum, Avg
from django.db.models.functions import Coalesce

from distribution_management.models import SalesTeams, DailyStocks
import datetime


def update_daily_stock(sales_team, date, mode=None, avg_rate=0):
    stock_instance, new = DailyStocks.objects.get_or_create(date=date, sales_team=sales_team)

    # Stock plates
    purchase = sales_team.eggcollections.filter(date=date).aggregate(no_of_plates__sum=Coalesce(Sum('no_of_plates'), 0))
    transfer_in = sales_team.demandtransfers_in.filter(date=date).aggregate(
        no_of_plates__sum=Coalesce(Sum('no_of_plates'), 0))
    transfer_out = sales_team.demandtransfers_out.filter(date=date).aggregate(
        no_of_plates__sum=Coalesce(Sum('no_of_plates'), 0))
    plates_sold = sales_team.salessummary.filter(date=date).aggregate(sold_plates__sum=Coalesce(Sum('sold_plates'), 0),
                                                                      damaged_plates__sum=Coalesce(Sum('damaged_plates'), 0))

    # old_stock = sales_team.dailystocks.filter(date__lt=date).order_by('-date').first()
    #
    # if old_stock:
    #     old_stock = old_stock.no_of_plates
    # else:
    #     old_stock = 0

    stock_instance.no_of_plates = purchase['no_of_plates__sum'] + transfer_in['no_of_plates__sum'] - \
                                  transfer_out['no_of_plates__sum'] - plates_sold['sold_plates__sum'] - \
                                  plates_sold['damaged_plates__sum']

    # stock rate
    if mode != 'TRANSFER_IN':
        purchase_date_of_stock = sales_team.eggcollections.filter(date__lte=date).order_by(
            '-date').first()

        avg_rate = sales_team.eggcollections.filter(date=purchase_date_of_stock.date) \
            .aggregate(rate__avg=Avg('rate'))['rate__avg'] \
            if purchase_date_of_stock else None

    stock_instance.rate = avg_rate if avg_rate else stock_instance.rate

    stock_instance.cost = float(stock_instance.rate) * float(stock_instance.no_of_plates)
    stock_instance.save()

    return stock_instance
