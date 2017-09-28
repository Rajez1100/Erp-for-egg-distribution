import { RouterModule, Routes } from '@angular/router';
import { PortalComponent } from './portal.component';
import { DashboardComponent } from './dashboard/dashboard.component';

export const PORTAL_ROUTES: Routes = [
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    {
        path: '',
        component: PortalComponent,
        children: [
            {
                path: 'dashboard',
                component: DashboardComponent
            },
            {
                path: 'egg-farms',
                loadChildren: './egg-farms/egg-farms.module#EggFarmsModule'
            },
            {
                path: 'sales-teams',
                loadChildren: './sales-teams/sales-teams.module#SalesTeamsModule'
            },
            {
                path: 'egg-collections',
                loadChildren: './egg-collections/egg-collections.module#EggCollectionsModule'
            },
            {
                path: 'demand-transfers',
                loadChildren: './demand-transfers/demand-transfers.module#DemandTransfersModule'
            },
            {
                path: 'payments',
                loadChildren: './payments/payments.module#PaymentsModule'
            },
            {
                path: 'sales-summary',
                loadChildren: './sales-summary/sales-summary.module#SalesSummaryModule'
            },
            {
                path: 'reports',
                loadChildren: './reports/reports.module#ReportsModule'
            }
        ]
    }

]

export const PORTAL_ROUTING = RouterModule.forChild(PORTAL_ROUTES);