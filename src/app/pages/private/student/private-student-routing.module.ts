/**
 * @author Emilio Sánchez Catalán <esc00019@gmail.com>
 * Purpose: has the configuration of the routes on the private student section
 */
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageSubsHomesComponent } from './page-subs-homes/page-subs-homes.component';
import { PageHomeComponent } from './page-home/page-home.component';
import { PageStdMessagesComponent } from './page-std-messages/page-std-messages.component';
import { PageStdMessageComponent } from './page-std-message/page-std-message.component';

const routes: Routes = [
  { path: '', redirectTo: 'subs-homes', pathMatch: 'full'},
  { path: 'subs-homes', component: PageSubsHomesComponent },
  { path: 'home', component: PageHomeComponent },
  { path: 'std-messages', component: PageStdMessagesComponent },
  { path: 'std-message', component: PageStdMessageComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrivateStudentRoutingModule { }
