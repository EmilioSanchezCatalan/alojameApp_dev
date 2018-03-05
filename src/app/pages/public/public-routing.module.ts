import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageHomeComponent } from './page-home/page-home.component';
import { PageLhomesComponent } from './page-lhomes/page-lhomes.component';

const routes: Routes =  [

  { path: '', redirectTo: 'index', pathMatch: 'full'},
  { path: 'index', component: PageHomeComponent},
  { path: 'homes', component: PageLhomesComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
