// TODO Messages para todo tipo de validaciones. (cuando tenga validacion distinta a required)

import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { FormGroup } from '@angular/forms';

import { FormErrorInfo } from '../interfaces/form-error-info';

@Injectable()
export class ValidatorErrorService {

  constructor(
    private __snackBar: MatSnackBar
  ) { }

  /**
   * shearch the name that we want show instead of the field names.
   * @param  {FormErrorInfo} formErrorInfo structure for real name of the form's fields
   * @param  {string}        fieldName     name of the field that we want shearch
   * @return {string}                      return  the real name.
   */
  private searchRealName(formErrorInfo: FormErrorInfo, fieldName: string): string {
    let realName: string;
    formErrorInfo.errorsInfo.forEach( element => {
      if (element.fieldName === fieldName) {
        realName = element.nameShow;
      }
    });
    return realName;
  }

  /**
   * add the message for a required params
   * @param  {string} message complete message of required error
   * @param  {string} text    field that is going to be added to the message
   * @return {string}         return a complete message
   */
  private addMessageRequired(message?: string, text?: string): string {
    if (!message) {
      message = 'Es necesario introducir los campos:';
    }
    if (text) {
      message += ' ' + text + ',';
    }
    return message;
  }

  /**
   * Genereate a message text that is going to shown in the snackBar like
   * advisor of a incorrect form.
   * @param  {FormGroup}     formGroup     form that is going to be validated
   * @param  {FormErrorInfo} formErrorInfo structure for real name of the form's fields
   * @return {string}                      return a error message.
   */
  private  generateMessage(formGroup: FormGroup, formErrorInfo: FormErrorInfo): string {
    let message = this.addMessageRequired();

    for (let key in formGroup.controls) {
      if ( formGroup.controls.hasOwnProperty(key) && formGroup.controls[key].valid === false) {
        message = this.addMessageRequired(message, this.searchRealName(formErrorInfo, key));
      }
    }

    // clean last ','
    message = message.substring(0, message.length - 1);

    return message;
  }

  /**
   * Check the forms validations and show the correct message error.
   * @param {FormGroup}     formGroup     form that is going to be validated
   * @param {FormErrorInfo} formErrorInfo estructure for real name of the form's fields
   */
  public checkErrors(formGroup: FormGroup, formErrorInfo: FormErrorInfo): void {

    const MESSAGE_ERROR = this.generateMessage(formGroup, formErrorInfo);

    this.__snackBar.open(MESSAGE_ERROR, 'Aceptar', {
      duration: 2500,
      verticalPosition: 'top',
      panelClass: 'error-validation'
    });
  }
}
