import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

import { CardHomeComponent } from './card-home.component';

@NgModule({
  declarations: [CardHomeComponent],
  imports: [MatCardModule],
  exports: [CardHomeComponent]
})
export class CardHomeModule {}
