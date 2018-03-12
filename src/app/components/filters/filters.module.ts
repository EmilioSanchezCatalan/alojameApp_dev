import { NgModule } from '@angular/core';
import {MatSliderModule, MatCheckboxModule, MatDatepickerModule} from '@angular/material';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';

import { FiltersComponent } from './filters.component';
import { ButtonFilterModule } from '../button-filter/button-filter.module';

@NgModule({
  declarations: [FiltersComponent],
  imports: [
    MatSliderModule,
    ButtonFilterModule,
    MatCheckboxModule,
    MatDatepickerModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule
  ],
  exports: [FiltersComponent]
})
export class FiltersModule { }
