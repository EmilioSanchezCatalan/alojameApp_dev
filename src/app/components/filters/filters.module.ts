import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSliderModule, MatCheckboxModule, MatDatepickerModule} from '@angular/material';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { FormsModule } from '@angular/forms';

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
    OwlNativeDateTimeModule,
    FormsModule,
    CommonModule
  ],
  exports: [FiltersComponent]
})
export class FiltersModule { }
