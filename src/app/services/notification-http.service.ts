import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { ResponseBasicInterface } from '../interfaces/response-basic';

@Injectable()
export class NotificationHttpService {

  constructor(
      private __snackBar: MatSnackBar
  ) { }

  public show( response: any): void {
      switch ( response.status) {
        case 0:
            this.__snackBar.open('Disculpe las molestias, hay un error de conexión con el servidor', 'Aceptar', {
                duration: 2500,
                verticalPosition: 'top',
                panelClass: 'error-validation'
            });
            break;
        case 201:
            this.__snackBar.open(response.messageText, 'Aceptar', {
                duration: 2500,
                verticalPosition: 'top',
                panelClass: 'validation-ok'
            });
            break;
        case 200:
            this.__snackBar.open(response.messageText, 'Aceptar', {
                duration: 2500,
                verticalPosition: 'top',
                panelClass: 'validation-ok'
            });
            break;
        case 400:
            if (response.error.errors) {
              Array.from(response.error.errors).forEach( (element: any) => {
                this.__snackBar.open(element.message, 'Aceptar', {
                  duration: 2500,
                  verticalPosition: 'top',
                  panelClass: 'error-validation'
                });
              });
            } else {
              this.__snackBar.open(response.error.messageText, 'Aceptar', {
                duration: 2500,
                verticalPosition: 'top',
                panelClass: 'error-validation'
              });
            }
            break;
        case 401:
          this.__snackBar.open('El nombre de usuario o contraseña son incorrectos', 'Aceptar', {
              duration: 2500,
              verticalPosition: 'top',
              panelClass: 'error-validation'
          });
          break;
        case 403:
            break;
        case 404:
            break;
      }

      // if ( response.error.name ) {
      //     Array.from(response.error.errors).forEach( (element: any) => {
      //         this.__snackBar.open(element.message, 'Aceptar', {
      //             duration: 2500,
      //             verticalPosition: 'top',
      //             panelClass: 'error-validation'
      //         });
      //     });
      // } else {
      //     this.__snackBar.open(response.messageText, 'Aceptar', {
      //         duration: 2500,
      //         verticalPosition: 'top',
      //         panelClass: response.error === true ? 'error-validation' : 'validation-ok'
      //     });
      // }
  }
}
