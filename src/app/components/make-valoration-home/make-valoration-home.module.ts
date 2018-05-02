import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material';

import { MakeValorationHomeComponent } from './make-valoration-home.component';
import { AloPopupModule } from '../../components/alo-popup/alo-popup.module';

@NgModule({
  declarations: [MakeValorationHomeComponent],
  imports: [
    FormsModule,
    MatDialogModule,
    AloPopupModule
  ],
  exports: [MakeValorationHomeComponent],
  entryComponents: [MakeValorationHomeComponent],
})
export class MakeValorationHomeModule { }
