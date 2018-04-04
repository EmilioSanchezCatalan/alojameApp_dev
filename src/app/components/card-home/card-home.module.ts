import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';

import { CardHomeComponent } from './card-home.component';

@NgModule({
  declarations: [CardHomeComponent],
  imports: [
    MatCardModule,
    CommonModule
  ],
  exports: [CardHomeComponent]
})
export class CardHomeModule {}
