import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageStdProfileConfComponent } from './page-std-profile-conf.component';
import { FormAvatarModule } from '../../../../components/form-avatar/form-avatar.module';
import { FormPersonalInfoModule } from '../../../../components/form-personal-info/form-personal-info.module';
import { FormStdInfoModule } from '../../../../components/form-std-info/form-std-info.module';
import { FormFeatureModule } from '../../../../components/form-feature/form-feature.module';
import { FormSaveModule } from '../../../../components/form-save/form-save.module';
import { AloLoadSpinnerModule } from '../../../../components/alo-load-spinner/alo-load-spinner.module';

@NgModule({
  declarations: [PageStdProfileConfComponent],
  imports: [
    FormAvatarModule,
    FormPersonalInfoModule,
    FormStdInfoModule,
    FormFeatureModule,
    FormSaveModule,
    CommonModule,
    AloLoadSpinnerModule
  ],
  exports: [PageStdProfileConfComponent]
})
export class PageStdProfileConfModule {}
