import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageOwnProfileShowComponent } from './page-own-profile-show.component';
import { UserBasicInfoModule } from '../../../../components/user-basic-info/user-basic-info.module';
import { AloLoadSpinnerModule } from '../../../../components/alo-load-spinner/alo-load-spinner.module';

@NgModule({
  declarations: [PageOwnProfileShowComponent],
  imports: [
    UserBasicInfoModule,
    AloLoadSpinnerModule,
    CommonModule
  ],
  exports: [PageOwnProfileShowComponent]
})
export class PageOwnProfileShowModule {}
