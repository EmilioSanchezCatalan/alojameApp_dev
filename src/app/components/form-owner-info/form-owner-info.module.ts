import { NgModule } from '@angular/core';
import { MatSlideToggleModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { FormOwnerInfoComponent } from './form-owner-info.component';

@NgModule({
  declarations: [FormOwnerInfoComponent],
  imports: [
    MatSlideToggleModule,
    CommonModule,
    FormsModule
  ],
  exports: [FormOwnerInfoComponent]
})
export class FormOwnerInfoModule {}
