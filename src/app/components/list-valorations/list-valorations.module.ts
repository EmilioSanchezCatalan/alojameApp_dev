import { NgModule } from '@angular/core';

import { ListValorationsComponent } from './list-valorations.component';
import { MakeValorationStudentModule } from '../make-valoration-student/make-valoration-student.module';
import { MakeValorationHomeModule } from '../make-valoration-home/make-valoration-home.module';

@NgModule({
  declarations: [ListValorationsComponent],
  imports: [
    MakeValorationStudentModule,
    MakeValorationHomeModule
  ],
  exports: [ListValorationsComponent]
})
export class ListValorationsModule {}
