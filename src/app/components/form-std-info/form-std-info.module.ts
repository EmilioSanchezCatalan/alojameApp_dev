import { NgModule } from '@angular/core';
import { MatSlideToggleModule } from '@angular/material';

import { FormStdInfoComponent } from './form-std-info.component';

@NgModule({
  declarations: [FormStdInfoComponent],
  imports: [MatSlideToggleModule],
  exports: [FormStdInfoComponent]
})
export class FormStdInfoModule {}
