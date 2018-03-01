/**
 * @author Emilio Sánchez <esc00019@gmail.com>
 * Purpose: Browser for shearch accommodation with some basics filters
 */

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'alo-browser-filter',
  templateUrl: './browser-filter.component.html',
  styleUrls: ['./browser-filter.component.css']
})
export class BrowserFilterComponent {

  public isFilterBrowserVisible: boolean;

  constructor(
    private __router: Router,
    private __snackBar: MatSnackBar
  ) {
    this.isFilterBrowserVisible = false;
  }

  /**
   * Set the visisble status to the browser
   * @param {boolean} status state of the visibility of the browser's filters
   */
  public setFilterBrowserStatus(status: boolean): void {
    this.isFilterBrowserVisible = status;
  }

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
