import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgmCoreModule } from '@agm/core';
import { MatCheckboxModule, MatSliderModule } from '@angular/material';
import { FormsModule } from '@angular/forms';

import { PageSearchHomesComponent } from './page-search-homes.component';
import { GridHomesModule } from '../../../../components/grid-homes/grid-homes.module';
import { FiltersModule } from '../../../../components/filters/filters.module';

@NgModule({
  declarations: [PageSearchHomesComponent],
  imports: [
    GridHomesModule,
    CommonModule,
    FiltersModule,
    MatCheckboxModule,
    MatSliderModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBmqtAnnZJ8C20gOdjmZKCq4SPaByTXMnk'
    })
  ],
  exports: [PageSearchHomesComponent]
})
export class PageSearchHomesModule {}
