import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageStdProfileComponent } from './page-std-profile.component';
import { UserValorationsModule } from '../../../../components/user-valorations/user-valorations.module';
import { UserBasicInfoModule } from '../../../../components/user-basic-info/user-basic-info.module';
import { AloLoadSpinnerModule } from '../../../../components/alo-load-spinner/alo-load-spinner.module';

@NgModule({
  declarations: [PageStdProfileComponent],
  imports: [
    UserValorationsModule,
    UserBasicInfoModule,
    CommonModule,
    AloLoadSpinnerModule
  ],
  exports: [PageStdProfileComponent]
})
export class PageStdProfileModule {}
