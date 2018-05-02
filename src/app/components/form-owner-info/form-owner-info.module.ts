import { NgModule } from '@angular/core';
import { MatSlideToggleModule } from '@angular/material';

import { FormOwnerInfoComponent } from './form-owner-info.component';

@NgModule({
  declarations: [FormOwnerInfoComponent],
  imports: [MatSlideToggleModule],
  exports: [FormOwnerInfoComponent]
})
export class FormOwnerInfoModule {}
