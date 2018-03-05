import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material';
import { CommonModule } from '@angular/common';

import { NavbarSimpleComponent } from './navbar-simple.component';
import { RegisterModule } from '../register/register.module';
import { LoginModule } from '../login/login.module';

@NgModule({
  declarations: [ NavbarSimpleComponent ],
  imports: [
    MatButtonModule,
    RegisterModule,
    CommonModule,
    RouterModule,
    LoginModule
  ],
  exports: [ NavbarSimpleComponent ]
})
export class NavbarSimpleModule {}
