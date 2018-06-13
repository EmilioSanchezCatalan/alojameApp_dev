import { NgModule } from '@angular/core';
import { MatCheckboxModule } from '@angular/material';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';

import { FormHomeAdComponent } from './form-home-ad.component';
import { OnlyPositiveModule } from '../../../directives/only-positive/only-positive.module';

@NgModule({
  declarations: [FormHomeAdComponent],
  imports: [
    MatCheckboxModule,
    OwlDateTimeModule,
    FormsModule,
    OwlNativeDateTimeModule,
    OnlyPositiveModule,
    CommonModule
  ],
  exports: [FormHomeAdComponent]
})
export class  FormHomeAdModule {}
