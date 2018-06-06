import { NgModule } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material';
import { CommonModule } from '@angular/common';

import { AloLoadSpinnerComponent } from './alo-load-spinner.component';

@NgModule({
  declarations: [AloLoadSpinnerComponent],
  imports: [
    MatProgressSpinnerModule,
    CommonModule
  ],
  exports: [AloLoadSpinnerComponent]
})
export class AloLoadSpinnerModule {}
