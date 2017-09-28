import { RouterModule, Routes } from '@angular/router';
import { SalesSummaryFormDataResolver, PaymentFormDataResolver } from 'app/resolvers';
import { ReportsComponent } from './reports.component';
import { WeeklyComponent } from './weekly/weekly.component';
import { PaymentsReportComponent } from './payments-report/payments-report.component';
import { DailyComponent } from './daily/daily.component';
import { SalesComponent } from './sales/sales.component';

export const REPORTS_ROUTES: Routes = [
    { path: '', redirectTo: 'sales', pathMatch: 'full' },
    {
        path: '',
        component: ReportsComponent,
        children: [
            {
                path: 'sales',
                children: [
                    { path: '', redirectTo: 'weekly', pathMatch: 'full' },
                    {
                        path: 'daily',
                        component: DailyComponent,
                    },
                    {
                        path: 'weekly',
                        component: WeeklyComponent,
                        resolve: { form_data: SalesSummaryFormDataResolver }
                    },
                    {
                        path: 'period',
                        component: SalesComponent,
                        resolve: { form_data: SalesSummaryFormDataResolver }
                    },
                ]
            },
            {
                path: 'payments',
                component: PaymentsReportComponent,
                resolve: { form_data: PaymentFormDataResolver }
            },


        ]
    }

]

export const REPORTS_ROUTING = RouterModule.forChild(REPORTS_ROUTES);