import { NgModule } from '@angular/core';

import { PageStdProfileConfComponent } from './page-std-profile-conf.component';
import { FormAvatarModule } from '../../../../components/form-avatar/form-avatar.module';
import { FormPersonalInfoModule } from '../../../../components/form-personal-info/form-personal-info.module';
import { FormStdInfoModule } from '../../../../components/form-std-info/form-std-info.module';
import { FormFeatureModule } from '../../../../components/form-feature/form-feature.module';
import { FormSaveModule } from '../../../../components/form-save/form-save.module';

@NgModule({
  declarations: [PageStdProfileConfComponent],
  imports: [
    FormAvatarModule,
    FormPersonalInfoModule,
    FormStdInfoModule,
    FormFeatureModule,
    FormSaveModule
  ],
  exports: [PageStdProfileConfComponent]
})
export class PageStdProfileConfModule {}
