import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageIndexComponent } from './page-index/page-index.component';
import { PageLhomesComponent } from './page-lhomes/page-lhomes.component';

const routes: Routes =  [

  { path: '', redirectTo: 'index', pathMatch: 'full'},
  { path: 'index', component: PageIndexComponent},
  { path: 'homes', component: PageLhomesComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
