import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material';

import { MakeValorationStudentComponent } from './make-valoration-student.component';
import { AloPopupModule } from '../../components/alo-popup/alo-popup.module';

@NgModule({
  declarations: [MakeValorationStudentComponent],
  imports: [
    FormsModule,
    MatDialogModule,
    AloPopupModule
  ],
  exports: [MakeValorationStudentComponent],
  entryComponents: [MakeValorationStudentComponent],
})
export class MakeValorationStudentModule { }
