/**
 * @author Emilio Sánchez Catalán <esc00019@gmail.com>
 * Purpose: has the configuration of the routes on the public section
 */
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageIndexComponent } from './page-index/page-index.component';
import { PageLhomesComponent } from './page-lhomes/page-lhomes.component';
import { PageHomeComponent } from './page-home/page-home.component';

const routes: Routes =  [

  { path: '', redirectTo: 'index', pathMatch: 'full'},
  { path: 'index', component: PageIndexComponent},
  { path: 'homes', component: PageLhomesComponent},
  { path: 'home', component: PageHomeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
