/**
 * @author Emilio Sánchez <esc00019@gmail.com>
 * Purpose: Navbar component for navigate for the page without browser flat
 */

import { Component } from '@angular/core';
import { MatDialogRef, MatDialog } from '@angular/material';
import { Router,  Event as RouterEvent} from '@angular/router';

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
  public isInHome: boolean;

  constructor(
    private __dialog: MatDialog,
    private __router: Router
  ) {
    this.isInHome = false;
    __router.events.subscribe( (event: any) => {
      if (event.url === '/public/index' || event.url === '/') {
        this.isInHome = true;
      } else {
        this.isInHome = false;
      }
    });
  }

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
