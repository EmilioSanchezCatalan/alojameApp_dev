import { NgModule } from '@angular/core';
import { MatCheckboxModule } from '@angular/material';

import { FormHomeServicesComponent } from './form-home-services.component';

@NgModule({
  declarations: [FormHomeServicesComponent],
  imports: [MatCheckboxModule],
  exports: [FormHomeServicesComponent]
})
export class  FormHomeServicesModule {}
