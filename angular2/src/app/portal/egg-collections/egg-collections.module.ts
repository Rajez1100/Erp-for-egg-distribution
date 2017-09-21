import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from 'app/shared';
import { AuthGuardService } from 'app/services';
import { EggCollectiondetailsResolver, EggCollectionFormDataResolver } from 'app/resolvers';
import { EggCollectionsComponent } from './egg-collections.component';
import { EggCollectionsListComponent } from './egg-collections-list/egg-collections-list.component';
import { EggCollectionsAddViewEditComponent } from './egg-collections-add-view-edit/egg-collections-add-view-edit.component';

const eggCollectionsRoutes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  {
    path: '',
    component: EggCollectionsComponent,
    children: [
      { path: 'list', component: EggCollectionsListComponent },
      {
        path: 'add',
        component: EggCollectionsAddViewEditComponent,
        resolve: { form_data: EggCollectionFormDataResolver }
      },
      {
        path: ':id',
        canActivate: [AuthGuardService],
        data: {
          regex: { id: '[0-9]+' }
        },
        resolve: { details: EggCollectiondetailsResolver, form_data: EggCollectionFormDataResolver },
        children: [
          { path: '', redirectTo: 'view', pathMatch: 'full' },
          { path: 'view', component: EggCollectionsAddViewEditComponent },
          { path: 'edit', component: EggCollectionsAddViewEditComponent }
        ]

      }
    ]
  }
];

const eggCollectionsRouting = RouterModule.forChild(eggCollectionsRoutes);

@NgModule({
  imports: [
    SharedModule,
    eggCollectionsRouting
  ],
  declarations: [EggCollectionsComponent, EggCollectionsListComponent, EggCollectionsAddViewEditComponent],
  providers: [EggCollectiondetailsResolver, EggCollectionFormDataResolver]
})
export class EggCollectionsModule { }
