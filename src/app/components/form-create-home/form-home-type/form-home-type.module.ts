import { NgModule } from '@angular/core';
import { MatRadioModule} from '@angular/material';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { FormHomeTypeComponent } from './form-home-type.component';
import { AloCounterModule } from '../../alo-counter/alo-counter.module';
import { OnlyPositiveModule } from '../../../directives/only-positive/only-positive.module';

@NgModule({
  declarations: [FormHomeTypeComponent],
  imports: [
    MatRadioModule,
    AloCounterModule,
    FormsModule,
    OnlyPositiveModule,
    CommonModule
  ],
  exports: [FormHomeTypeComponent]
})
export class  FormHomeTypeModule {}
