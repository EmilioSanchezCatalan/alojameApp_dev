import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgmCoreModule } from '@agm/core';

import { PageLhomesComponent } from './page-lhomes.component';
import { GridHomesModule } from '../../../components/grid-homes/grid-homes.module';
@NgModule({
  declarations: [ PageLhomesComponent ],
  imports: [
    GridHomesModule,
    CommonModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBmqtAnnZJ8C20gOdjmZKCq4SPaByTXMnk'
    })
  ],
  exports: [ PageLhomesComponent ]
})
export class PageLhomesModule {}
