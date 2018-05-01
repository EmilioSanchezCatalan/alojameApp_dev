import { NgModule } from '@angular/core';

import { PageMyHomeComponent } from './page-my-home.component';
import { HomeDetailsModule } from '../../../../components/home-details/home-details.module';
import { HomeValorationsModule } from '../../../../components/home-valorations/home-valorations.module';
import { GalleryShowModule } from '../../../../components/gallery-show/gallery-show.module';
import { RoomerDetailsModule } from '../../../../components/roomer-details/roomer-details.module';
import { SubscribeBarModule } from '../../../../components/subscribe-bar/subscribe-bar.module';

@NgModule({
  declarations: [PageMyHomeComponent],
  imports: [
    HomeDetailsModule,
    HomeValorationsModule,
    GalleryShowModule,
    RoomerDetailsModule,
    SubscribeBarModule
  ],
  exports: [PageMyHomeComponent]
})
export class PageMyHomeModule {}
