import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AloPaginationComponent } from './alo-pagination.component';

@NgModule({
  declarations: [AloPaginationComponent],
  imports: [CommonModule],
  exports: [AloPaginationComponent]
})
export class AloPaginationModule {}
