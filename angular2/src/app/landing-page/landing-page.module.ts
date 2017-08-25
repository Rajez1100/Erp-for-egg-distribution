import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageRouting } from './landing-page.routing';
import { LandingPageComponent } from './landing-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { AuthComponent } from './auth/auth.component';
import { LoginComponent } from './auth/login/login.component';
import { PasswordResetComponent } from './auth/password-reset/password-reset.component';
import { PasswordResetConfirmComponent } from './auth/password-reset-confirm/password-reset-confirm.component';

import { SharedModule } from 'app/shared';


@NgModule({ 
  imports: [
    CommonModule,
    LandingPageRouting,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ],
  declarations: [
    LoginComponent,
    LandingPageComponent,
    HomeComponent,
    AuthComponent,
    PasswordResetComponent,
    PasswordResetComponent,
    PasswordResetConfirmComponent
    ],
    providers: [
    ]
})
export class LandingPageModule { }
