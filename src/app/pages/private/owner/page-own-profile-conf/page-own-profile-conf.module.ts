import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageOwnProfileConfComponent } from './page-own-profile-conf.component';
import { FormAvatarModule } from '../../../../components/form-avatar/form-avatar.module';
import { FormPersonalInfoModule } from '../../../../components/form-personal-info/form-personal-info.module';
import { FormOwnerInfoModule } from '../../../../components/form-owner-info/form-owner-info.module';
import { FormSaveModule } from '../../../../components/form-save/form-save.module';
import { AloLoadSpinnerModule } from '../../../../components/alo-load-spinner/alo-load-spinner.module';

@NgModule({
  declarations: [PageOwnProfileConfComponent],
  imports: [
    CommonModule,
    FormAvatarModule,
    FormPersonalInfoModule,
    FormOwnerInfoModule,
    FormSaveModule,
    AloLoadSpinnerModule
  ],
  exports: [PageOwnProfileConfComponent]
})
export class PageOwnProfileConfModule {}
