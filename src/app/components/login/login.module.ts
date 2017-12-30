import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MdDialogModule} from '@angular/material';
import { LoginComponent } from './login.component';

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    MdDialogModule,
    CommonModule,
    FormsModule
  ],
  exports: [
    LoginComponent
  ],
  entryComponents: [
    LoginComponent
  ],
})
export class LoginModule { }
