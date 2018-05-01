import { NgModule } from '@angular/core';

import { PageHomeComponent } from './page-home.component';
import { HomeDetailsModule } from '../../../components/home-details/home-details.module';
import { HomeValorationsModule } from '../../../components/home-valorations/home-valorations.module';
import { GalleryShowModule } from '../../../components/gallery-show/gallery-show.module';
import { SubscribeBarModule } from '../../../components/subscribe-bar/subscribe-bar.module';
import { RegisterModule } from '../../../components/register/register.module';
import { LoginModule } from '../../../components/login/login.module';

@NgModule({
  declarations: [PageHomeComponent],
  exports: [PageHomeComponent],
  imports: [
    HomeDetailsModule,
    HomeValorationsModule,
    GalleryShowModule,
    SubscribeBarModule,
    RegisterModule,
    LoginModule
  ]
})
export class PageHomeModule {}
