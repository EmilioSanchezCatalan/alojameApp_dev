import { NgModule } from '@angular/core';

import { NavbarComponent } from './navbar.component';

import { MatButtonModule } from '@angular/material';

@NgModule({
  declarations: [
    NavbarComponent
  ],
  imports: [
    MatButtonModule
  ],
  exports: [
    NavbarComponent
  ]
})
export class NavbarModule { }
