import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [

  { path: '', redirectTo: 'public', pathMatch: 'full'},
  {
    path: 'public',
    loadChildren: 'app/pages/public/public.module#PublicModule'
  },
  {
    path: 'private/owner',
    loadChildren: 'app/pages/private/owner/private-owner.module#PrivateOwnerModule'
  },
  {
    path: 'private/student',
    loadChildren: 'app/pages/private/student/private-student.module#PrivateStudentModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
