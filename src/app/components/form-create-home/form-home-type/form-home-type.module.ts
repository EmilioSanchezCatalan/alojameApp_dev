import { NgModule } from '@angular/core';
import { MatRadioModule} from '@angular/material';
import { FormsModule } from '@angular/forms';

import { FormHomeTypeComponent } from './form-home-type.component';
import { AloCounterModule } from '../../alo-counter/alo-counter.module';

@NgModule({
  declarations: [FormHomeTypeComponent],
  imports: [
    MatRadioModule,
    AloCounterModule,
    FormsModule
  ],
  exports: [FormHomeTypeComponent]
})
export class  FormHomeTypeModule {}
