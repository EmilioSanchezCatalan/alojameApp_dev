import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material';

@Injectable()
export class ErrorSimpleNotificationService {

  constructor(
    private __snackBar: MatSnackBar
  ) { }

  /**
   * Show a simple error message with a snackBar format
   * @param {string} message text with the error message to show
   */
  public show( message: string ): void {
    this.__snackBar.open(message, 'Aceptar', {
      duration: 2500,
      verticalPosition: 'top',
      panelClass: 'error-validation'
    });
  }
}
