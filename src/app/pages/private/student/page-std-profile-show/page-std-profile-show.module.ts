import { NgModule } from '@angular/core';

import { PageStdProfileShowComponent } from './page-std-profile-show.component';
import { UserValorationsModule } from '../../../../components/user-valorations/user-valorations.module';
import { UserBasicInfoModule } from '../../../../components/user-basic-info/user-basic-info.module';

@NgModule({
  declarations: [PageStdProfileShowComponent],
  imports: [
    UserValorationsModule,
    UserBasicInfoModule
  ],
  exports: [PageStdProfileShowComponent]
})
export class PageStdProfileShowModule {}
