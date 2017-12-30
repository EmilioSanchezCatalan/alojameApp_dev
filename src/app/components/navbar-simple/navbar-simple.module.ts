import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material';

import { NavbarSimpleComponent } from './navbar-simple.component';
import { RegisterModule } from '../register/register.module';
import { LoginModule } from '../login/login.module';

@NgModule({
  declarations: [ NavbarSimpleComponent ],
  imports: [
    MatButtonModule,
    RegisterModule,
    LoginModule
  ],
  exports: [ NavbarSimpleComponent ]
})
export class NavbarSimpleModule {}
