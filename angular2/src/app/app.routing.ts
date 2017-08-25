import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService, AuthRedirectorService } from './services';


export const APP_ROUTES: Routes = [
    {
        path: '',
        loadChildren: './landing-page/landing-page.module#LandingPageModule'
    },
    {
        path: 'app',
        loadChildren: './portal/portal.module#PortalModule',
        canActivate: [AuthGuardService]
    },
    {
        path: 'error',
        loadChildren: './error/error.module#ErrorModule'
    },
    {
        path: '**',
        redirectTo: '/error/not-found'
    }
]

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
export const APP_ROUTER_PROVIDERS = [AuthGuardService, AuthRedirectorService];