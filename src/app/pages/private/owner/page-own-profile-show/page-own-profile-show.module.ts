import { NgModule } from '@angular/core';

import { PageOwnProfileShowComponent } from './page-own-profile-show.component';
import { UserValorationsModule } from '../../../../components/user-valorations/user-valorations.module';
import { UserBasicInfoModule } from '../../../../components/user-basic-info/user-basic-info.module';

@NgModule({
  declarations: [PageOwnProfileShowComponent],
  imports: [
    UserValorationsModule,
    UserBasicInfoModule
  ],
  exports: [PageOwnProfileShowComponent]
})
export class PageOwnProfileShowModule {}
