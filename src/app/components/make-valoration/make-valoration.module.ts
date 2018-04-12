import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material';

import { MakeValorationComponent } from './make-valoration.component';
import { AloPopupModule } from '../../components/alo-popup/alo-popup.module';

@NgModule({
  declarations: [MakeValorationComponent],
  imports: [
    FormsModule,
    MatDialogModule,
    AloPopupModule
  ],
  exports: [MakeValorationComponent],
  entryComponents: [MakeValorationComponent],
})
export class MakeValorationModule { }
