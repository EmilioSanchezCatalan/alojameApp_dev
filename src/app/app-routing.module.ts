import { Routes } from '@angular/router';

import { PageHomeComponent } from './pages/page-home/page-home.component';
import { PageLhomesComponent } from './pages/page-lhomes/page-lhomes.component';

export const routes: Routes =  [

  { path: '', redirectTo: 'index', pathMatch: 'full' },
  { path: 'index', component: PageHomeComponent},
  { path: 'homes/:city', component: PageLhomesComponent }
];
