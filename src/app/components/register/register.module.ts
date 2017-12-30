import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MdDialogModule, MdTooltipModule} from '@angular/material';
import { RegisterComponent } from './register.component';

@NgModule({
  declarations: [
    RegisterComponent
  ],
  imports: [
    MdDialogModule,
    CommonModule,
    MdTooltipModule,
    FormsModule
  ],
  exports: [
    RegisterComponent
  ],
  entryComponents: [
    RegisterComponent
  ],
})
export class RegisterModule { }
