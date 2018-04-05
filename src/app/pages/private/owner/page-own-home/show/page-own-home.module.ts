import { NgModule } from '@angular/core';

import { PageOwnHomeComponent } from './page-own-home.component';
import { HomeDetailsModule } from '../../../../../components/home-details/home-details.module';
import { HomeValorationsModule } from '../../../../../components/home-valorations/home-valorations.module';
import { GalleryShowModule } from '../../../../../components/gallery-show/gallery-show.module';

@NgModule({
  declarations: [PageOwnHomeComponent],
  imports: [
    HomeDetailsModule,
    HomeValorationsModule,
    GalleryShowModule
  ],
  exports: [PageOwnHomeComponent]
})
export class PageOwnHomeModule {}
