import { NgModule } from '@angular/core';
import { MatCheckboxModule } from '@angular/material';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';

import { FormHomeAdComponent } from './form-home-ad.component';

@NgModule({
  declarations: [FormHomeAdComponent],
  imports: [
    MatCheckboxModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule
  ],
  exports: [FormHomeAdComponent]
})
export class  FormHomeAdModule {}
