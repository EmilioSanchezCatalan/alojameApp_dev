import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

import { GridHomesComponent } from './grid-homes.component';

@NgModule({
  declarations: [GridHomesComponent],
  imports: [MatCardModule],
  exports: [GridHomesComponent]
})
export class GridHomesModule {}
