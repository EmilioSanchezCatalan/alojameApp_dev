import { NgModule } from '@angular/core';

import { PageOwnProfileShowComponent } from './page-own-profile-show.component';
import { HomeValorationsModule } from '../../../../components/home-valorations/home-valorations.module';
import { UserBasicInfoModule } from '../../../../components/user-basic-info/user-basic-info.module';

@NgModule({
  declarations: [PageOwnProfileShowComponent],
  imports: [
    HomeValorationsModule,
    UserBasicInfoModule
  ],
  exports: [PageOwnProfileShowComponent]
})
export class PageOwnProfileShowModule {}
