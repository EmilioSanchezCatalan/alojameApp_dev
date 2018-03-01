import { NgModule } from '@angular/core';

import { NavbarComponent } from './navbar.component';

import { MatButtonModule } from '@angular/material';
import { RegisterModule } from '../register/register.module';
import { LoginModule } from '../login/login.module';

@NgModule({
  declarations: [
    NavbarComponent
  ],
  imports: [
    MatButtonModule,
    RegisterModule,
    LoginModule
  ],
  exports: [
    NavbarComponent
  ]
})
export class NavbarModule { }
