import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageOwnHomesComponent } from './page-own-homes/page-own-homes.component';

const routes: Routes =  [

  { path: '', redirectTo: 'own-homes', pathMatch: 'full'},
  { path: 'own-homes', component: PageOwnHomesComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
