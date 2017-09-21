import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from 'app/shared';
import { AuthGuardService } from 'app/services';
import { PaymentdetailsResolver, PaymentFormDataResolver } from 'app/resolvers';
import { PaymentsListComponent } from './payments-list/payments-list.component';
import { PaymentsAddViewEditComponent } from './payments-add-view-edit/payments-add-view-edit.component';
import { PaymentsComponent } from './payments.component';

const paymentsRoutes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  {
    path: '',
    component: PaymentsComponent,
    children: [
      { path: 'list', component: PaymentsListComponent },
      {
        path: 'add',
        component: PaymentsAddViewEditComponent,
        resolve: { form_data: PaymentFormDataResolver }

      },
      {
        path: ':id',
        canActivate: [AuthGuardService],
        data: {
          regex: { id: '[0-9]+' }
        },
        resolve: { details: PaymentdetailsResolver, form_data: PaymentFormDataResolver },
        children: [
          { path: '', redirectTo: 'view', pathMatch: 'full' },
          { path: 'view', component: PaymentsAddViewEditComponent },
          { path: 'edit', component: PaymentsAddViewEditComponent }
        ]

      }
    ]
  }
];

const paymentsRouting = RouterModule.forChild(paymentsRoutes);

@NgModule({
  imports: [
    SharedModule,
    paymentsRouting
  ],
  declarations: [PaymentsListComponent, PaymentsAddViewEditComponent, PaymentsComponent],
  providers: [PaymentdetailsResolver, PaymentFormDataResolver]
})
export class PaymentsModule { }
