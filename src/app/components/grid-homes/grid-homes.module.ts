import { NgModule } from '@angular/core';

import { GridHomesComponent } from './grid-homes.component';
import { CardHomeModule } from '../card-home/card-home.module';

@NgModule({
  declarations: [GridHomesComponent],
  imports: [
    CardHomeModule
  ],
  exports: [GridHomesComponent]
})
export class GridHomesModule {}
