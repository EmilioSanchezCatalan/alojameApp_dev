import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material';
import { FormHomeAddressComponent } from './form-home-address.component';
import { OnlyPositiveModule } from '../../../directives/only-positive/only-positive.module';

@NgModule({
  declarations: [FormHomeAddressComponent],
  imports: [
    CommonModule,
    FormsModule,
    OnlyPositiveModule,
    MatAutocompleteModule,
    ReactiveFormsModule
  ],
  exports: [FormHomeAddressComponent]
})
export class  FormHomeAddressModule {}
