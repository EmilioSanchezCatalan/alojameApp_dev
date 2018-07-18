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
import { PageOwnHomeEditComponent } from './page-own-home/edit/page-own-home-edit.component';
import { PageOwnMessagesComponent } from './page-own-messages/page-own-messages.component';
import { PageOwnMessageComponent } from './page-own-message/page-own-message.component';
import { PageOwnValorationsComponent } from './page-own-valorations/page-own-valorations.component';
import { PageOwnProfileConfComponent } from './page-own-profile-conf/page-own-profile-conf.component';
import { PageOwnProfileShowComponent } from './page-own-profile-show/page-own-profile-show.component';
import { PageProfileShowComponent } from './page-profile-show/page-profile-show.component';

const routes: Routes = [
  { path: '', redirectTo: 'own-homes', pathMatch: 'full'},
  { path: 'own-homes', component: PageOwnHomesComponent },
  { path: 'own-home', children: [
    { path: 'show/:homeId', component: PageOwnHomeComponent },
    { path: 'students/:homeId', component: PageOwnHomeStudentsComponent },
    { path: 'create', component: PageOwnHomeCreateComponent },
    { path: 'edit/:homeId', component: PageOwnHomeEditComponent }
  ]},
  { path: 'own-messages', component: PageOwnMessagesComponent },
  { path: 'own-message/:userId', component: PageOwnMessageComponent },
  { path: 'own-valorations', component: PageOwnValorationsComponent },
  { path: 'own-profile', children: [
    { path: 'show', component: PageOwnProfileShowComponent},
    { path: 'configuration', component: PageOwnProfileConfComponent }
  ]},
  { path: 'std-profile/show/:userId', component: PageProfileShowComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrivateOwnerRoutingModule { }
