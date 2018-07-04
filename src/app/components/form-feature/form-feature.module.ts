import { NgModule } from '@angular/core';
import { MatSliderModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { FormFeatureComponent } from './form-feature.component';

@NgModule({
  declarations: [FormFeatureComponent],
  imports: [
    MatSliderModule,
    FormsModule,
    CommonModule
  ],
  exports: [FormFeatureComponent]
})
export class FormFeatureModule {}
