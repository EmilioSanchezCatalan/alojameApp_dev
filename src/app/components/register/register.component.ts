/**
 * @author Emilio Sánchez <esc00019@gmail.com>
 * Purpose: Select the type of user for register in the platform and make the register
 */
import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material';

declare var $: any;

@Component({
  selector: 'alo-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  public isEmailFocus: boolean;
  public years_list: Array<number>;
  public user_type: string;
  constructor(public dialogRef: MatDialogRef<RegisterComponent>) {
    this.years_list = [];
    this.dateGenerate();

  }
  /**
   * Restore user type
   */
  public restoreUserType(): void {
    this.user_type = undefined;
  }
  /**
   * Set the user type of count
   * @param { string } user_type is a type of user count, could be 'student' or 'owner'
   */
  public setUserType(user_type: string): void {
    this.user_type = user_type;
    setTimeout( () => {
      $('.selectpicker').selectpicker();
    }, 50);
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
   * Generate the list of years
   */
  public dateGenerate(): void {
    const now_year: number = new Date().getFullYear();
    for (let i = now_year; i >= 1910; i--) {
      this.years_list.push(i);
    }
  }
  /**
   * Close popup register and notify to the parent, it has to open a login
   */
  public openLogin(): void {
    this.dialogRef.close('login');
  }
}
