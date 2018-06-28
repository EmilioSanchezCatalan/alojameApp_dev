/**
 * @author Emilio Sánchez <esc00019@gmail.com>
 * Purpose: login in the platform
 */

import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { ValidatorErrorService } from '../../services/validator-error.service';
import { FormErrorInfo } from '../../interfaces/form-error-info';
import { AuthOwnerService } from '../../services/auth-owner.service';
import { NotificationHttpService } from '../../services/notification-http.service';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'alo-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [
    ValidatorErrorService,
    NotificationHttpService,
    AuthOwnerService
  ]
})
export class LoginComponent {

  public isEmailFocus: boolean;
  public isPassForgot: boolean;
  public isOwner: boolean;
  private __loginFormNames: FormErrorInfo;
  private __recoverFormNames: FormErrorInfo;
  constructor(
    private __dialogRef: MatDialogRef<LoginComponent>,
    private __valError: ValidatorErrorService,
    private __auth: AuthOwnerService,
    private __notfHttp: NotificationHttpService,
    private __router: Router
  ) {
    this.isOwner = false;
    this.isPassForgot = false;
    this.__loginFormNames = {
      errorsInfo: [
        {
          fieldName: 'username',
          nameShow: 'Email'
        },
        {
          fieldName: 'password',
          nameShow: 'Contraseña'
        }
      ]
    };
    this.__recoverFormNames = {
      errorsInfo: [
        {
          fieldName: 'emailRecov',
          nameShow: 'Email'
        }
      ]
    };
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
    this.__dialogRef.close(false);
  }
  /**
   * Close popup login and notify to the parent, it has to open a register
   */
  public openRegister(): void {
    this.__dialogRef.close('register');
  }
  /**
   * Set password forgot
   * @param { boolean } pass_forgot inform to the view if the user forgot the password or not
   */
  public setPassForgot(pass_forgot: boolean): void {
    this.isPassForgot = pass_forgot;
  }

  /**
   * Execute the form login with a validation
   * @param {FormGroup} formLogin form of the login
   */
  public setLogin(formLogin: FormGroup): void {
    if (formLogin.valid === true ) {
      this.__auth.login(formLogin.value).then( response => {
        console.log('Entra');
        this.__auth.setAuth(response.token);
        this.__router.navigate(['private', 'owner', 'own-homes']);
        this.__dialogRef.close();
      }).catch( error => {
        this.__notfHttp.show(error);
      });
    } else {
      this.__valError.checkErrors(formLogin, this.__loginFormNames);
    }
  }

  /**
   * Execute the form of recovery the password by the email.
   * @param {FormGroup} formRecover form of the recovery password
   */
  public setRecover( formRecover: FormGroup): void {
    if (formRecover.valid === true ) {
      // TODO connection with the API
    } else {
      this.__valError.checkErrors(formRecover, this.__recoverFormNames);
    }
  }

  /**
   * Redirect to the idp for make the login
   */
   public loginIdp(): void {
     window.location.href = environment.API_URL + 'public/saml-auth/login';
   }
}
