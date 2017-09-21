// Imports & Providers
import { NgModule, ErrorHandler, Injector } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { APP_ROUTING, APP_ROUTER_PROVIDERS } from './app.routing';
import { HttpModule, Http, RequestOptions, ResponseOptions } from '@angular/http';
import { JwtHelper, AuthHttp, AuthConfig, AUTH_PROVIDERS } from 'angular2-jwt';
import { SharedModule } from './shared/shared.module';
import { AppComponent } from './app.component';

import {
  AuthService, UserService, RolesService, GlobalsService, NotificationsService,
  AipDirectoryService, EggFarmsService, SalesTeamsService, EggCollectionsService,
  DemandTransfersService, SalesSummaryService, PaymentsService
} from 'app/services';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    HttpModule,
    APP_ROUTING
  ],
  providers: [

    APP_ROUTER_PROVIDERS,
    AuthService,
    JwtHelper,
    AuthHttp,
    UserService,
    RolesService,
    GlobalsService,
    NotificationsService,
    AipDirectoryService,
    EggFarmsService,
    SalesTeamsService,
    EggCollectionsService,
    DemandTransfersService,
    SalesSummaryService,
    PaymentsService,
    {
      provide: AuthHttp,
      useFactory: authHttpServiceFactory,
      deps: [Http, RequestOptions]
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private injector: Injector) {
    ServiceLocator.injector = this.injector;
  }
}

export class ServiceLocator {
  static injector: Injector;
}

// Service factory for angular2-jwt configuration
export function authHttpServiceFactory(http: Http, options: RequestOptions) {
  return new AuthHttp(new AuthConfig({
    headerName: 'Authorization',
    headerPrefix: 'JWT',
    tokenName: 'id_token',
    globalHeaders: [{ 'Content-Type': ' application/json' }],
    noJwtError: true,
    noTokenScheme: true
  }), http, options);
}
