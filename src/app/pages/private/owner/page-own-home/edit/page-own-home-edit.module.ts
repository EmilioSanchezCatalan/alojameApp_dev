import { NgModule } from '@angular/core';

import { PageOwnHomeEditComponent } from './page-own-home-edit.component';
import { FormEditHomeModule } from '../../../../../components/form-create-home/form-edit-home.module';

@NgModule({
  declarations: [PageOwnHomeEditComponent],
  imports: [FormEditHomeModule],
  exports: [PageOwnHomeEditComponent]
})
export class PageOwnHomeEditModule {}
