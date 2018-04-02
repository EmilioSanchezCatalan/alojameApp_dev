import { NgModule } from '@angular/core';

import { PageHomeComponent } from './page-home.component';
import { HomeDetailsModule } from '../../../components/home-details/home-details.module';

@NgModule({
  declarations: [PageHomeComponent],
  exports: [PageHomeComponent],
  imports: [HomeDetailsModule]
})
export class PageHomeModule {}
