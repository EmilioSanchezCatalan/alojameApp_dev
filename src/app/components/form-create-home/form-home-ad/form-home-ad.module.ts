import { NgModule } from '@angular/core';
import { MatCheckboxModule } from '@angular/material';

import { FormHomeAdComponent } from './form-home-ad.component';

@NgModule({
  declarations: [FormHomeAdComponent],
  imports: [MatCheckboxModule],
  exports: [FormHomeAdComponent]
})
export class  FormHomeAdModule {}
