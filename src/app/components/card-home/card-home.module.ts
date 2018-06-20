import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';

import { CardHomeComponent } from './card-home.component';
import { TypeRentModule } from '../../pipes/type-rent/type-rent.module';

@NgModule({
  declarations: [CardHomeComponent],
  imports: [
    MatCardModule,
    CommonModule,
    TypeRentModule
  ],
  exports: [CardHomeComponent]
})
export class CardHomeModule {}
