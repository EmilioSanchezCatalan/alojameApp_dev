import { NgModule } from '@angular/core';

import { FormHomeRoomsComponent } from './form-home-rooms.component';
import { AloCounterModule } from '../../alo-counter/alo-counter.module';

@NgModule({
  declarations: [FormHomeRoomsComponent],
  imports: [AloCounterModule],
  exports: [FormHomeRoomsComponent]
})
export class  FormHomeRoomsModule {}
