import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material';

import { LoginComponent } from './login.component';
import { AloPopupModule } from '../../components/alo-popup/alo-popup.module';

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    MatDialogModule,
    CommonModule,
    FormsModule,
    AloPopupModule
  ],
  exports: [
    LoginComponent
  ],
  entryComponents: [
    LoginComponent
  ],
})
export class LoginModule { }
