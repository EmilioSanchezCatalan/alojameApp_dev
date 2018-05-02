import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

import { FormPersonalInfoComponent } from './form-personal-info.component';

@NgModule({
  declarations: [FormPersonalInfoComponent],
  imports: [
    CommonModule,
    MatSlideToggleModule
  ],
  exports: [FormPersonalInfoComponent]
})
export class FormPersonalInfoModule {}
