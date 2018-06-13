import { NgModule } from '@angular/core';
import { MatCheckboxModule } from '@angular/material';
import { CommonModule } from '@angular/common';

import { FormHomeServicesComponent } from './form-home-services.component';

@NgModule({
  declarations: [FormHomeServicesComponent],
  imports: [
    MatCheckboxModule,
    CommonModule
  ],
  exports: [FormHomeServicesComponent]
})
export class  FormHomeServicesModule {}
