import { NgModule } from '@angular/core';

import { PageOwnHomeComponent } from './page-own-home.component';
import { HomeDetailsModule } from '../../../../../components/home-details/home-details.module';
import { HomeValorationsModule } from '../../../../../components/home-valorations/home-valorations.module';
import { GalleryShowModule } from '../../../../../components/gallery-show/gallery-show.module';
import { RoomerDetailsModule } from '../../../../../components/roomer-details/roomer-details.module';

@NgModule({
  declarations: [PageOwnHomeComponent],
  imports: [
    HomeDetailsModule,
    HomeValorationsModule,
    GalleryShowModule,
    RoomerDetailsModule
  ],
  exports: [PageOwnHomeComponent]
})
export class PageOwnHomeModule {}
