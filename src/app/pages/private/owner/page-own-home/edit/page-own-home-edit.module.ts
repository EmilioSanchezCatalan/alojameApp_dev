import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageOwnHomeEditComponent } from './page-own-home-edit.component';
import { FormEditHomeModule } from '../../../../../components/form-create-home/form-edit-home.module';
import { FormSaveModule } from '../../../../../components/form-save/form-save.module';
import { AloLoadSpinnerModule } from '../../../../../components/alo-load-spinner/alo-load-spinner.module';

@NgModule({
  declarations: [PageOwnHomeEditComponent],
  imports: [
    CommonModule,
    FormEditHomeModule,
    FormSaveModule,
    AloLoadSpinnerModule
  ],
  exports: [PageOwnHomeEditComponent]
})
export class PageOwnHomeEditModule {}
