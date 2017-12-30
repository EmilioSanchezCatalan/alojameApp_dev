/**
 * @author Emilio Sánchez <esc00019@gmail.com>
 * Propuse: Navbar component for navigate for the page
 */

import { Component, OnInit } from '@angular/core';
import { trigger, state,  style, animate, transition } from '@angular/animations';
import { MdDialogRef, MdDialog } from '@angular/material';

import { RegisterComponent } from '../register/register.component';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'alo-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  providers: [
    MdDialog
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
export class NavbarComponent implements OnInit {

  public isDisplaySideNav: boolean;
  public sidenavState: string;
  constructor(
    private _dialog: MdDialog
  ) {
    this.sidenavState = 'out';
    this.isDisplaySideNav = false;
  }

  ngOnInit() {
  }

  /**
   * Open a sidenav and produces all the effects
   */
  public openSideNav() {
    this.isDisplaySideNav = true;
    this.sidenavState = 'in';
  }

  /**
   * Close sidenav and remove all the effects
   */
  public closeSideNav() {
    this.sidenavState = 'out';
    setTimeout( () => {
      this.isDisplaySideNav = false;
    }, 505);
  }

  /**
   * Open a popup of Register
   */
  public openRegister() {
    let popupRegister: MdDialogRef<RegisterComponent>;
    popupRegister = this._dialog.open(RegisterComponent);
    popupRegister.afterClosed().subscribe(
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
  public openLogin() {
    let popupRegister: MdDialogRef<LoginComponent>;
    popupRegister = this._dialog.open(LoginComponent);
    popupRegister.afterClosed().subscribe(
      response => {
        if(response === 'register'){
          this.openRegister();
        }
      }
    );
  }
}
