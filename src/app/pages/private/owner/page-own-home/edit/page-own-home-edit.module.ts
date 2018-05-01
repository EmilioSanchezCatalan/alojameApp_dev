import { NgModule } from '@angular/core';

import { PageOwnHomeEditComponent } from './page-own-home-edit.component';
import { FormEditHomeModule } from '../../../../../components/form-create-home/form-edit-home.module';
import { FormSaveModule } from '../../../../../components/form-save/form-save.module';

@NgModule({
  declarations: [PageOwnHomeEditComponent],
  imports: [
    FormEditHomeModule,
    FormSaveModule
  ],
  exports: [PageOwnHomeEditComponent]
})
export class PageOwnHomeEditModule {}
