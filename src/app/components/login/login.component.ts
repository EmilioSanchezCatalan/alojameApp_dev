/**
 * @author Emilio Sánchez <esc00019@gmail.com>
 * Purpose: login in the platform
 */

import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'alo-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  public isEmailFocus: boolean;
  public isPassForgot: boolean;
  constructor(public dialogRef: MatDialogRef<LoginComponent>) {
    this.isPassForgot = false;
  }
  /**
   * Set email focus var to true when the focus is in
   */
  public setEmailFocus(): void {
    this.isEmailFocus = true;
  }
  /**
   * Set email focus var to false when the focus is out
   */
  public setEmailNotFocus(): void {
    this.isEmailFocus = false;
  }
  /**
   * Close the register's popup
   */
  public closePopup(): void {
    this.dialogRef.close(false);
  }
  /**
   * Close popup login and notify to the parent, it has to open a register
   */
  public openRegister(): void {
    this.dialogRef.close('register');
  }
  /**
   * Set password forgot
   * @param { boolean } pass_forgot inform to the view if the user forgot the password or not
   */
  public setPassForgot(pass_forgot: boolean): void {
    this.isPassForgot = pass_forgot;
  }
}
