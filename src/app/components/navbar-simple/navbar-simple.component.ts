/**
 * @author Emilio Sánchez <esc00019@gmail.com>
 * Propuse: Navbar component for navigate for the page without browser flat
 */

import { Component, OnInit } from '@angular/core';
import { MdDialogRef, MdDialog } from '@angular/material';

import { RegisterComponent } from '../register/register.component';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'alo-navbar-simple',
  templateUrl: './navbar-simple.component.html',
  styleUrls: ['./navbar-simple.component.css']
})
export class NavbarSimpleComponent implements OnInit {

  constructor( private _dialog: MdDialog ) { }
  ngOnInit() {
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
