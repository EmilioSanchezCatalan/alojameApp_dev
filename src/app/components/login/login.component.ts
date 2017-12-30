/**
 * @author Emilio Sánchez <esc00019@gmail.com>
 * Propose: login in the platform
 */
import { Component, OnInit } from '@angular/core';
import { MdDialogRef } from '@angular/material';

@Component({
  selector: 'alo-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public isEmailFocus: boolean;
  public isPassForgot: boolean;
  constructor(public dialogRef: MdDialogRef<LoginComponent>) {
    this.isPassForgot = false;
  }

  ngOnInit() {
  }
  /**
   * Set email focus var to true when the focus is in
   */
  public setEmailFocus() {
    this.isEmailFocus = true;
  }
  /**
   * Set email focus var to false when the focus is out
   */
  public setEmailNotFocus() {
    this.isEmailFocus = false;
  }
  /**
   * Close the register's popup
   */
  public closePopup() {
    this.dialogRef.close(false);
  }
  /**
   * Close popup login and notify to the parent, it has to open a register
   */
  public openRegister() {
    this.dialogRef.close('register');
  }
  /**
   * Set password forgot
   * @param { boolean } pass_forgot inform to the view if the user forgot the password or not
   */
  public setPassForgot(pass_forgot: boolean){
    this.isPassForgot = pass_forgot;
  }
}
