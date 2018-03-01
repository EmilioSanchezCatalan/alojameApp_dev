import { Routes } from '@angular/router';

import { PageHomeComponent } from './pages/page-home/page-home.component';
import { PageLhomesComponent } from './pages/page-lhomes/page-lhomes.component';

const routes: Routes =  [
  { path: '', component: PageHomeComponent },
  { path: '', component: PageLhomesComponent }
];
