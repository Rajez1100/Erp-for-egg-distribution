import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from 'app/shared';
import { AuthGuardService } from 'app/services';
import { SalesTeamdetailsResolver } from 'app/resolvers';
import { SalesTeamsComponent } from './sales-teams.component';
import { SalesTeamsListComponent } from './sales-teams-list/sales-teams-list.component';
import { SalesTeamsAddViewEditComponent } from './sales-teams-add-view-edit/sales-teams-add-view-edit.component';

const salesTeamsRoutes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  {
    path: '',
    component: SalesTeamsComponent,
    children: [
      { path: 'list', component: SalesTeamsListComponent },
      { path: 'add', component: SalesTeamsAddViewEditComponent },
      {
        path: ':id',
        canActivate: [AuthGuardService],
        data: {
          regex: { id: '[0-9]+' }
        },
        resolve: { details: SalesTeamdetailsResolver },
        children: [
          { path: '', redirectTo: 'view', pathMatch: 'full' },
          { path: 'view', component: SalesTeamsAddViewEditComponent },
          { path: 'edit', component: SalesTeamsAddViewEditComponent }
        ]

      }
    ]
  }
];

const salesTeamsRouting = RouterModule.forChild(salesTeamsRoutes);

@NgModule({
  imports: [
    SharedModule,
    salesTeamsRouting
  ],
  declarations: [SalesTeamsComponent, SalesTeamsListComponent , SalesTeamsAddViewEditComponent],
  providers: [SalesTeamdetailsResolver]
})
export class SalesTeamsModule { }
