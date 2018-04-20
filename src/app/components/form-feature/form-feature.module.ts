import { NgModule } from '@angular/core';
import { MatSliderModule } from '@angular/material';

import { FormFeatureComponent } from './form-feature.component';

@NgModule({
  declarations: [FormFeatureComponent],
  imports: [MatSliderModule],
  exports: [FormFeatureComponent]
})
export class FormFeatureModule {}
