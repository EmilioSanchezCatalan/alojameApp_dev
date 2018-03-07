import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GridHomesComponent } from './grid-homes.component';
import { CardHomeModule } from '../card-home/card-home.module';
import { AloPaginationModule } from '../alo-pagination/alo-pagination.module';

@NgModule({
  declarations: [GridHomesComponent],
  imports: [
    CardHomeModule,
    CommonModule,
    AloPaginationModule
  ],
  exports: [GridHomesComponent]
})
export class GridHomesModule {}
