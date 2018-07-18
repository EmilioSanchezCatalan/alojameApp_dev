import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoomerDetailsComponent } from './roomer-details.component';

@NgModule({
  declarations: [RoomerDetailsComponent],
  imports: [CommonModule],
  exports: [RoomerDetailsComponent]
})
export class RoomerDetailsModule {}
