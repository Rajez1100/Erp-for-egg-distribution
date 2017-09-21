import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from 'app/shared';
import { AuthGuardService } from 'app/services';
import { EggFarmdetailsResolver } from 'app/resolvers';
import { EggFarmsComponent } from './egg-farms.component';
import { EggFarmsListComponent } from './egg-farms-list/egg-farms-list.component';
import { EggFarmAddViewEditComponent } from './egg-farm-add-view-edit/egg-farm-add-view-edit.component';

const eggFarmsRoutes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  {
    path: '',
    component: EggFarmsComponent,
    children: [
      { path: 'list', component: EggFarmsListComponent },
      { path: 'add', component: EggFarmAddViewEditComponent },
      {
        path: ':id',
        canActivate: [AuthGuardService],
        data: {
          regex: { id: '[0-9]+' }
        },
        resolve: { details: EggFarmdetailsResolver },
        children: [
          { path: '', redirectTo: 'view', pathMatch: 'full' },
          { path: 'view', component: EggFarmAddViewEditComponent },
          { path: 'edit', component: EggFarmAddViewEditComponent }
        ]

      }
    ]
  }
];

const eggFarmsRouting = RouterModule.forChild(eggFarmsRoutes);

@NgModule({
  imports: [
    SharedModule,
    eggFarmsRouting
  ],
  declarations: [EggFarmsComponent, EggFarmsListComponent, EggFarmAddViewEditComponent],
  providers: [EggFarmdetailsResolver]
})
export class EggFarmsModule { }


