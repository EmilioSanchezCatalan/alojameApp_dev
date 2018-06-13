import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { FormHomeAddressComponent } from './form-home-address.component';
import { OnlyPositiveModule } from '../../../directives/only-positive/only-positive.module';

@NgModule({
  declarations: [FormHomeAddressComponent],
  imports: [
    CommonModule,
    FormsModule,
    OnlyPositiveModule
  ],
  exports: [FormHomeAddressComponent]
})
export class  FormHomeAddressModule {}
