import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageProfileShowComponent } from './page-profile-show.component';
import { UserValorationsModule } from '../../../../components/user-valorations/user-valorations.module';
import { UserBasicInfoModule } from '../../../../components/user-basic-info/user-basic-info.module';
import { AloLoadSpinnerModule } from '../../../../components/alo-load-spinner/alo-load-spinner.module';

@NgModule({
  declarations: [PageProfileShowComponent],
  imports: [
    UserBasicInfoModule,
    AloLoadSpinnerModule,
    UserValorationsModule,
    CommonModule
  ],
  exports: [PageProfileShowComponent]
})
export class PageProfileShowModule {}
