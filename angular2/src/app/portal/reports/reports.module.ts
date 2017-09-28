import { NgModule } from '@angular/core';
import { SharedModule } from 'app/shared';
import { ReportsService } from 'app/services';
import { SalesSummaryFormDataResolver, PaymentFormDataResolver } from 'app/resolvers';

import { REPORTS_ROUTING } from './reports.routing';

import { ReportsComponent } from './reports.component';
import { WeeklyComponent } from './weekly/weekly.component';
import { PaymentsReportComponent } from './payments-report/payments-report.component';
import { DailyComponent } from './daily/daily.component';
import { SalesComponent } from './sales/sales.component';

@NgModule({
  imports: [
    SharedModule,
    REPORTS_ROUTING
  ],
  declarations: [ReportsComponent, WeeklyComponent, PaymentsReportComponent, DailyComponent, SalesComponent],
  providers: [
    ReportsService,
    SalesSummaryFormDataResolver,
    PaymentFormDataResolver
  ]
})
export class ReportsModule { }
