/**
 * @author Emilio Sánchez <esc00019@gmail.com>
 * Purpose: shearch home in a list of DB
 */
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'alo-browser-filter-movile',
  templateUrl: './browser-filter-movile.component.html',
  styleUrls: ['./browser-filter-movile.component.css']
})
export class BrowserFilterMovileComponent {

  constructor(
    private __snackBar: MatSnackBar
  ) { }

  /**
   * Navegate to the page lhome using the preferences fixed
   * @param { FormGroup } formShearch form for shearch homes
   */
  public shearchHome( formShearch: FormGroup): void {
    if (formShearch.valid === true) {
      console.log(formShearch.value);
    } else {
      let errorMessage = 'Es necesario introducir los campos:';

      if (formShearch.controls['address'].valid === false) {
        errorMessage += ' Direccón,';
      }
      if (formShearch.controls['city'].valid === false) {
        errorMessage += ' Ciudad,';
      }
      errorMessage = errorMessage.substring(0, errorMessage.length - 1);
      this.__snackBar.open(errorMessage, 'Aceptar', {
        duration: 2500,
        verticalPosition: 'top',
        panelClass: 'error-validation'
      });
    }
  }
}
