import { RouterModule, Routes } from '@angular/router';

import { LandingPageComponent } from './landing-page.component';
import { AuthComponent } from './auth/auth.component';
import { LoginComponent } from './auth/login/login.component';
import { PasswordResetComponent } from './auth/password-reset/password-reset.component';
import { PasswordResetConfirmComponent } from './auth/password-reset-confirm/password-reset-confirm.component';
import { HomeComponent } from './home/home.component';

import { AuthRedirectorService } from 'app/services';

const LandingPageRoutes: Routes = [
    { path: '', redirectTo: 'auth/login', pathMatch: 'full' },
    {
        path: '',
        component: LandingPageComponent,
        canActivate: [AuthRedirectorService],
        children: [
            { path: 'home', component: HomeComponent },
            {
                path: 'auth',
                component: AuthComponent,
                children: [
                    { path: '', redirectTo: 'login', pathMatch: 'full' },
                    // Login Page
                    { path: 'login', component: LoginComponent },
                    { // Password Resetting
                        path: 'password/reset',
                        children: [
                            { path: '', component: PasswordResetComponent },
                            { path: 'confirm', component: PasswordResetConfirmComponent }
                        ]
                    }
                ]
            }
        ]
    }

];

export const LandingPageRouting = RouterModule.forChild(LandingPageRoutes);
