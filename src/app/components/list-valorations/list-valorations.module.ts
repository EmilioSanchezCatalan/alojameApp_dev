import { NgModule } from '@angular/core';

import { ListValorationsComponent } from './list-valorations.component';
import { MakeValorationModule } from '../make-valoration/make-valoration.module';

@NgModule({
  declarations: [ListValorationsComponent],
  imports: [MakeValorationModule],
  exports: [ListValorationsComponent]
})
export class ListValorationsModule {}
