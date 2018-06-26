import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { FormsModule } from '@angular/forms';

import { FormPersonalInfoComponent } from './form-personal-info.component';

@NgModule({
  declarations: [FormPersonalInfoComponent],
  imports: [
    CommonModule,
    MatSlideToggleModule,
    FormsModule
  ],
  exports: [FormPersonalInfoComponent]
})
export class FormPersonalInfoModule {}
