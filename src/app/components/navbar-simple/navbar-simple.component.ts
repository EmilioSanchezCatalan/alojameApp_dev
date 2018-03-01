/**
 * @author Emilio Sánchez <esc00019@gmail.com>
 * Purpose: Navbar component for navigate for the page without browser flat
 */

import { Component } from '@angular/core';
import { MatDialogRef, MatDialog } from '@angular/material';

import { RegisterComponent } from '../register/register.component';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'alo-navbar-simple',
  templateUrl: './navbar-simple.component.html',
  styleUrls: ['./navbar-simple.component.css']
})
export class NavbarSimpleComponent {

  public popupRegister: MatDialogRef<RegisterComponent>;
  public popupLogin: MatDialogRef<LoginComponent>;

  constructor( private __dialog: MatDialog ) { }

  /**
   * Open a popup of Register
   */
  public openRegister(): void {
    this.popupRegister = this.__dialog.open(RegisterComponent);
    this.popupRegister.afterClosed().subscribe(
      response => {
        if (response === 'login') {
          this.openLogin();
        }
      }
    );
  }

  /**
   * Open a popup of Login
   */
  public openLogin(): void {
    this.popupLogin = this.__dialog.open(LoginComponent);
    this.popupLogin.afterClosed().subscribe(
      response => {
        if (response === 'register') {
          this.openRegister();
        }
      }
    );
  }
}
