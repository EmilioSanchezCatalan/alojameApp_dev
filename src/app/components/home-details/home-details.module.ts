import { NgModule } from '@angular/core';
import { MatExpansionModule } from '@angular/material';
import { CommonModule } from '@angular/common';

import { HomeDetailsComponent } from './home-details.component';
import { TypeRentModule } from '../../pipes/type-rent/type-rent.module';

@NgModule({
  declarations: [ HomeDetailsComponent ],
  imports: [
    MatExpansionModule,
    CommonModule,
    TypeRentModule
  ],
  exports: [ HomeDetailsComponent ]
})
export class HomeDetailsModule {}
