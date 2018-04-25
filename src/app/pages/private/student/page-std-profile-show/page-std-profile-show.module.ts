import { NgModule } from '@angular/core';

import { PageStdProfileShowComponent } from './page-std-profile-show.component';
import { HomeValorationsModule } from '../../../../components/home-valorations/home-valorations.module';
import { UserBasicInfoModule } from '../../../../components/user-basic-info/user-basic-info.module';

@NgModule({
  declarations: [PageStdProfileShowComponent],
  imports: [
    HomeValorationsModule,
    UserBasicInfoModule
  ],
  exports: [PageStdProfileShowComponent]
})
export class PageStdProfileShowModule {}
