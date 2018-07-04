import { NgModule } from '@angular/core';
import { MatSlideToggleModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { FormStdInfoComponent } from './form-std-info.component';

@NgModule({
  declarations: [FormStdInfoComponent],
  imports: [
    MatSlideToggleModule,
    FormsModule,
    CommonModule
  ],
  exports: [FormStdInfoComponent]
})
export class FormStdInfoModule {}
