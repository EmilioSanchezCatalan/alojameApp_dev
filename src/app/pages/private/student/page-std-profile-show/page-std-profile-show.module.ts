import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageStdProfileShowComponent } from './page-std-profile-show.component';
import { UserValorationsModule } from '../../../../components/user-valorations/user-valorations.module';
import { UserBasicInfoModule } from '../../../../components/user-basic-info/user-basic-info.module';
import { AloLoadSpinnerModule } from '../../../../components/alo-load-spinner/alo-load-spinner.module';

@NgModule({
  declarations: [PageStdProfileShowComponent],
  imports: [
    UserValorationsModule,
    UserBasicInfoModule,
    AloLoadSpinnerModule,
    CommonModule
  ],
  exports: [PageStdProfileShowComponent]
})
export class PageStdProfileShowModule {}
