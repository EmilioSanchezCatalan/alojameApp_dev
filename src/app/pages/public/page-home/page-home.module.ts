import { NgModule } from '@angular/core';

import { PageHomeComponent } from './page-home.component';
import { HomeDetailsModule } from '../../../components/home-details/home-details.module';
import { HomeValorationsModule } from '../../../components/home-valorations/home-valorations.module';
@NgModule({
  declarations: [PageHomeComponent],
  exports: [PageHomeComponent],
  imports: [
    HomeDetailsModule,
    HomeValorationsModule
  ]
})
export class PageHomeModule {}
