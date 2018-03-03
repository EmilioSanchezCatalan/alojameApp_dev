// TODO Responsive iphone 5 and 4;
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AloPopupComponent } from './alo-popup.component';
import { AloPopupHeaderComponent } from './alo-popup-header/alo-popup-header.component';
import { AloPopupContainerComponent } from './alo-popup-container/alo-popup-container.component';
import { AloPopupFooterComponent } from './alo-popup-footer/alo-popup-footer.component';

@NgModule({
  declarations: [
    AloPopupComponent,
    AloPopupHeaderComponent,
    AloPopupContainerComponent,
    AloPopupFooterComponent
  ],
  imports: [CommonModule],
  exports: [
    AloPopupComponent,
    AloPopupHeaderComponent,
    AloPopupContainerComponent,
    AloPopupFooterComponent
  ]
})
export class AloPopupModule {}
