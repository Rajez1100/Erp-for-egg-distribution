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
            }
        ]
    }

]

export const PORTAL_ROUTING = RouterModule.forChild(PORTAL_ROUTES);