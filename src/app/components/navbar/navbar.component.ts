/**
 * @author Emilio Sánchez <esc00019@gmail.com>
 * Purpose: Navbar component for navigate for the page
 */

import { Component } from '@angular/core';
import { trigger, state,  style, animate, transition } from '@angular/animations';
import { MatDialogRef, MatDialog } from '@angular/material';

import { RegisterComponent } from '../register/register.component';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'alo-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  providers: [
    MatDialog
  ],
  animations: [
    trigger('slideInOut', [
      state('in', style({
        left: '0'
      })),
      state('out', style({
        left: '-250px'
      })),
      transition('in => out', animate('500ms ease-in-out')),
      transition('out => in', animate('500ms ease-in-out'))
    ])
  ]
})
export class NavbarComponent {

  public isDisplaySideNav: boolean;
  public sidenavState: string;
  public popupLogin: MatDialogRef<LoginComponent>;
  public popupRegister: MatDialogRef<RegisterComponent>;

  constructor(
    private __dialog: MatDialog
  ) {
    this.sidenavState = 'out';
    this.isDisplaySideNav = false;
  }

  /**
   * Open a sidenav and produces all the effects
   */
  public openSideNav(): void {
    this.isDisplaySideNav = true;
    this.sidenavState = 'in';
  }

  /**
   * Close sidenav and remove all the effects
   */
  public closeSideNav(): void {
    this.sidenavState = 'out';
    setTimeout( () => {
      this.isDisplaySideNav = false;
    }, 505);
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
