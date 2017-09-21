import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from 'app/shared';
import { AuthGuardService } from 'app/services';
import { DemandTransferdetailsResolver, DemandTransferFormDataResolver } from 'app/resolvers';
import { DemandTransfersComponent } from './demand-transfers.component';
import { DemandTransfersListComponent } from './demand-transfers-list/demand-transfers-list.component';
import { DemandTransfersAddViewEditComponent } from './demand-transfers-add-view-edit/demand-transfers-add-view-edit.component';

const demandTransfersRoutes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  {
    path: '',
    component: DemandTransfersComponent,
    children: [
      { path: 'list', component: DemandTransfersListComponent },
      {
        path: 'add',
        component: DemandTransfersAddViewEditComponent,
        resolve: { form_data: DemandTransferFormDataResolver }
      },
      {
        path: ':id',
        canActivate: [AuthGuardService],
        data: {
          regex: { id: '[0-9]+' }
        },
        resolve: { details: DemandTransferdetailsResolver, form_data: DemandTransferFormDataResolver },
        children: [
          { path: '', redirectTo: 'view', pathMatch: 'full' },
          { path: 'view', component: DemandTransfersAddViewEditComponent },
          { path: 'edit', component: DemandTransfersAddViewEditComponent }
        ]

      }
    ]
  }
];

const demandTransfersRouting = RouterModule.forChild(demandTransfersRoutes);

@NgModule({
  imports: [
    SharedModule,
    demandTransfersRouting
  ],
  declarations: [DemandTransfersComponent, DemandTransfersListComponent, DemandTransfersAddViewEditComponent],
  providers: [DemandTransferdetailsResolver, DemandTransferFormDataResolver]
})
export class DemandTransfersModule { }
