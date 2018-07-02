import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageHomeComponent } from './page-home.component';
import { HomeDetailsModule } from '../../../../components/home-details/home-details.module';
import { HomeValorationsModule } from '../../../../components/home-valorations/home-valorations.module';
import { GalleryShowModule } from '../../../../components/gallery-show/gallery-show.module';
import { RoomerDetailsModule } from '../../../../components/roomer-details/roomer-details.module';
import { SubscribeBarModule } from '../../../../components/subscribe-bar/subscribe-bar.module';
import { AloLoadSpinnerModule } from '../../../../components/alo-load-spinner/alo-load-spinner.module';

@NgModule({
  declarations: [PageHomeComponent],
  imports: [
    HomeDetailsModule,
    HomeValorationsModule,
    GalleryShowModule,
    RoomerDetailsModule,
    SubscribeBarModule,
    AloLoadSpinnerModule,
    CommonModule
  ],
  exports: [PageHomeComponent]
})
export class PageHomeModule {}
