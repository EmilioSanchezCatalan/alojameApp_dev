import { NgModule } from '@angular/core';
import { MatRadioModule} from '@angular/material';

import { FormHomeTypeComponent } from './form-home-type.component';
import { AloCounterModule } from '../../alo-counter/alo-counter.module';

@NgModule({
  declarations: [FormHomeTypeComponent],
  imports: [
    MatRadioModule,
    AloCounterModule
  ],
  exports: [FormHomeTypeComponent]
})
export class  FormHomeTypeModule {}
