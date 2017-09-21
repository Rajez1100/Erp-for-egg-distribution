import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from 'app/shared';
import { AuthGuardService } from 'app/services';
import { SalesSummarydetailsResolver, SalesSummaryFormDataResolver } from 'app/resolvers';
import { SalesSummaryListComponent } from './sales-summary-list/sales-summary-list.component';
import { SalesSummaryAddViewEditComponent } from './sales-summary-add-view-edit/sales-summary-add-view-edit.component';
import { SalesSummaryComponent } from './sales-summary.component';

const salesSummaryRoutes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  {
    path: '',
    component: SalesSummaryComponent,
    children: [
      { path: 'list', component: SalesSummaryListComponent },
      {
        path: 'add',
        component: SalesSummaryAddViewEditComponent,
        resolve: { form_data: SalesSummaryFormDataResolver }

      },
      {
        path: ':id',
        canActivate: [AuthGuardService],
        data: {
          regex: { id: '[0-9]+' }
        },
        resolve: { details: SalesSummarydetailsResolver, form_data: SalesSummaryFormDataResolver },
        children: [
          { path: '', redirectTo: 'view', pathMatch: 'full' },
          { path: 'view', component: SalesSummaryAddViewEditComponent },
          { path: 'edit', component: SalesSummaryAddViewEditComponent }
        ]

      }
    ]
  }
];

const salesSummaryRouting = RouterModule.forChild(salesSummaryRoutes);

@NgModule({
  imports: [
    SharedModule,
    salesSummaryRouting
  ],
  declarations: [SalesSummaryListComponent, SalesSummaryAddViewEditComponent, SalesSummaryComponent],
  providers: [SalesSummarydetailsResolver, SalesSummaryFormDataResolver]
})
export class SalesSummaryModule { }
