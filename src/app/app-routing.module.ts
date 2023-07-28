import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreatePageComponent } from './shared/pages/create-page/create-page.component';
import { EditPageComponent } from './shared/pages/edit-page/edit-page.component';
import { VisualizePageComponent } from './shared/pages/visualize-page/visualize-page.component';

const routes: Routes = [
  {
    path: 'credits',
    component: CreatePageComponent
  },
  {
    path: 'edit',
    component: EditPageComponent
  },
  {
    path: 'visualize',
    component: VisualizePageComponent
  },
  {
    path: '**',
    redirectTo: 'credits'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
