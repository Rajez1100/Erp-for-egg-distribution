import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { PortalComponent } from './portal.component';
import { PORTAL_ROUTING } from './portal.routing';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { InspiniaInitiator } from './side-bar/inspinia.initiator';
import { AddViewEditInterfaceComponent } from './add-view-edit-interface/add-view-edit-interface.component';

@NgModule({
  imports: [
    SharedModule,
    PORTAL_ROUTING
  ],
  declarations: [
    PortalComponent,
    DashboardComponent,
    NavBarComponent,
    SideBarComponent,
    InspiniaInitiator,
    AddViewEditInterfaceComponent
  ],
  providers: [
    
  ]
})
export class PortalModule { }
