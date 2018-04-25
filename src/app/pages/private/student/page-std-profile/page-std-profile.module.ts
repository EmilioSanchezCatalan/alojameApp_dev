import { NgModule } from '@angular/core';

import { PageStdProfileComponent } from './page-std-profile.component';
import { HomeValorationsModule } from '../../../../components/home-valorations/home-valorations.module';
import { UserBasicInfoModule } from '../../../../components/user-basic-info/user-basic-info.module';

@NgModule({
  declarations: [PageStdProfileComponent],
  imports: [
    HomeValorationsModule,
    UserBasicInfoModule
  ],
  exports: [PageStdProfileComponent]
})
export class PageStdProfileModule {}
