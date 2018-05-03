import { NgModule } from '@angular/core';

import { PageStdProfileComponent } from './page-std-profile.component';
import { UserValorationsModule } from '../../../../components/user-valorations/user-valorations.module';
import { UserBasicInfoModule } from '../../../../components/user-basic-info/user-basic-info.module';

@NgModule({
  declarations: [PageStdProfileComponent],
  imports: [
    UserValorationsModule,
    UserBasicInfoModule
  ],
  exports: [PageStdProfileComponent]
})
export class PageStdProfileModule {}
