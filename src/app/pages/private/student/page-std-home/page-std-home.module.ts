import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageStdHomeComponent } from './page-std-home.component';
import { HomeDetailsModule } from '../../../../components/home-details/home-details.module';
import { HomeValorationsModule } from '../../../../components/home-valorations/home-valorations.module';
import { GalleryShowModule } from '../../../../components/gallery-show/gallery-show.module';
import { RoomerDetailsModule } from '../../../../components/roomer-details/roomer-details.module';
import { AloLoadSpinnerModule } from '../../../../components/alo-load-spinner/alo-load-spinner.module';

@NgModule({
  declarations: [PageStdHomeComponent],
  imports: [
    HomeDetailsModule,
    HomeValorationsModule,
    GalleryShowModule,
    RoomerDetailsModule,
    CommonModule,
    AloLoadSpinnerModule
  ],
  exports: [PageStdHomeComponent]
})
export class PageStdHomeModule {}
