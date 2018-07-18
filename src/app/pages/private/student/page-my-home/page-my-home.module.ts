import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageMyHomeComponent } from './page-my-home.component';
import { HomeDetailsModule } from '../../../../components/home-details/home-details.module';
import { HomeValorationsModule } from '../../../../components/home-valorations/home-valorations.module';
import { GalleryShowModule } from '../../../../components/gallery-show/gallery-show.module';
import { RoomerDetailsModule } from '../../../../components/roomer-details/roomer-details.module';
import { SubscribeBarModule } from '../../../../components/subscribe-bar/subscribe-bar.module';
import { AloLoadSpinnerModule } from '../../../../components/alo-load-spinner/alo-load-spinner.module';

@NgModule({
  declarations: [PageMyHomeComponent],
  imports: [
    CommonModule,
    HomeDetailsModule,
    HomeValorationsModule,
    GalleryShowModule,
    RoomerDetailsModule,
    SubscribeBarModule,
    AloLoadSpinnerModule
  ],
  exports: [PageMyHomeComponent]
})
export class PageMyHomeModule {}
