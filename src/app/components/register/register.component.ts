/**
 * @author Emilio Sánchez <esc00019@gmail.com>
 * Purpose: Select the type of user for register in the platform and make the register
 */
import { Component, OnInit} from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { FormGroup } from '@angular/forms';

import { ValidatorErrorService } from '../../services/validator-error.service';
import { NotificationHttpService } from '../../services/notification-http.service';
import { AuthOwnerService } from '../../services/auth-owner.service';
import { FormErrorInfo } from '../../interfaces/form-error-info';

declare var $: any;

@Component({
  selector: 'alo-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [
      ValidatorErrorService,
      NotificationHttpService,
      AuthOwnerService
  ]
})
export class RegisterComponent implements OnInit {

  public isEmailFocus: boolean;
  public yearsList: Array<number>;
  public userType: string;
  private __registerFormNames: FormErrorInfo;

  constructor(
    private __dialogRef: MatDialogRef<RegisterComponent>,
    private __valError: ValidatorErrorService,
    private __notfHttp: NotificationHttpService,
    private __authOwner: AuthOwnerService
  ) {
    this.yearsList = [];
    this.dateGenerate();
    this.userType = 'owner';
    this.__registerFormNames = {
      errorsInfo: [
        {
          fieldName: 'email',
          nameShow: 'Email',
        },
        {
          fieldName: 'name',
          nameShow: 'Nombre',
        },
        {
          fieldName: 'surname',
          nameShow: 'Apellidos',
        },
        {
          fieldName: 'password',
          nameShow: 'Contraseña',
        },
        {
          fieldName: 'birthMonth',
          nameShow: 'Mes',
        },
        {
          fieldName: 'birthDay',
          nameShow: 'Día',
        },
        {
          fieldName: 'birthYear',
          nameShow: 'Año',
        },
        {
          fieldName: 'userType',
          nameShow: 'Tipo de usuario',
        }
      ]
    };
  }

  ngOnInit() {
      setTimeout( () => {
        // TODO ISSUE 0000001 effecto de expansión en el popup
        $('.selectpicker').selectpicker();
    }, 10);
  }
  /**
   * Restore user type
   */
  public restoreUserType(): void {
    this.userType = undefined;
  }
  /**
   * Set the user type of count
   * @param { string } userType is a type of user count, could be 'student' or 'owner'
   */
  public setUserType(userType: string): void {
    this.userType = userType;
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
   * Generate the list of years
   */
  public dateGenerate(): void {
    const now_year: number = new Date().getFullYear();
    for (let i = now_year; i >= 1910; i--) {
      this.yearsList.push(i);
    }
  }

  /**
   * Close popup register and notify to the parent, it has to open a login
   */
  public openLogin(): void {
    this.__dialogRef.close('login');
  }

  /**
   * Execute a form register new user.
   * @param {FormGroup} formRegister form of the register user
   */
  public setRegister(formRegister: FormGroup): void {
    if (formRegister.valid === true) {
        this.__authOwner.register(formRegister.value).then( response => {
            this.__notfHttp.show(response);
            this.__dialogRef.close();
        }).catch( error => {
            this.__notfHttp.show(error);
        });
    } else {
      this.__valError.checkErrors( formRegister, this.__registerFormNames);
    }
  }
}
