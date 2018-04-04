import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [

  { path: '', redirectTo: 'public', pathMatch: 'full'},
  {
    path: 'public',
    loadChildren: 'app/pages/public/public.module#PublicModule'
  },
  {
    path: 'private',
    loadChildren: 'app/pages/private/owner/private-owner.module#PrivateOwnerModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
