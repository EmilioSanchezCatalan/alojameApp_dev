import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SubscribeBarComponent } from './subscribe-bar.component';

@NgModule({
  declarations: [SubscribeBarComponent],
  imports: [CommonModule],
  exports: [SubscribeBarComponent]
})
export class SubscribeBarModule {}
