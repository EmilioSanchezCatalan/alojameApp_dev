import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatButtonModule, MatAutocompleteModule } from '@angular/material';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

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
    LoginModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [ NavbarSimpleComponent ]
})
export class NavbarSimpleModule {}
