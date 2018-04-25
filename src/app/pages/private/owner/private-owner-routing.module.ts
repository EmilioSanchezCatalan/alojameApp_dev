/**
 * @author Emilio Sánchez Catalán <esc00019@gmail.com>
 * Purpose: has the configuration of the routes on the private owner section
 */
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageOwnHomesComponent } from './page-own-homes/page-own-homes.component';
import { PageOwnHomeComponent } from './page-own-home/show/page-own-home.component';
import { PageOwnHomeStudentsComponent } from './page-own-home/students/page-own-home-students.component';
import { PageOwnHomeCreateComponent } from './page-own-home/create/page-own-home-create.component';
import { PageOwnMessagesComponent } from './page-own-messages/page-own-messages.component';
import { PageOwnMessageComponent } from './page-own-message/page-own-message.component';
import { PageOwnValorationsComponent } from './page-own-valorations/page-own-valorations.component';
import { PageOwnProfileConfComponent } from './page-own-profile-conf/page-own-profile-conf.component';

const routes: Routes = [
  { path: '', redirectTo: 'own-homes', pathMatch: 'full'},
  { path: 'own-homes', component: PageOwnHomesComponent },
  { path: 'own-home', children: [
    { path: 'show', component: PageOwnHomeComponent },
    { path: 'students', component: PageOwnHomeStudentsComponent },
    { path: 'create', component: PageOwnHomeCreateComponent }
  ]},
  { path: 'own-messages', component: PageOwnMessagesComponent },
  { path: 'own-message', component: PageOwnMessageComponent },
  { path: 'own-valorations', component: PageOwnValorationsComponent },
  { path: 'own-profile', children: [
    { path: 'configuration', component: PageOwnProfileConfComponent }
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrivateOwnerRoutingModule { }
