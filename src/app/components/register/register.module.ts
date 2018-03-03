import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatDialogModule, MatTooltipModule} from '@angular/material';

import { AloPopupModule } from '../../components/alo-popup/alo-popup.module';
import { RegisterComponent } from './register.component';

@NgModule({
  declarations: [
    RegisterComponent
  ],
  imports: [
    MatDialogModule,
    CommonModule,
    MatTooltipModule,
    FormsModule,
    AloPopupModule
  ],
  exports: [
    RegisterComponent
  ],
  entryComponents: [
    RegisterComponent
  ],
})
export class RegisterModule { }
