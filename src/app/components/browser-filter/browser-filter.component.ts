/**
 * @author Emilio Sánchez <esc00019@gmail.com>
 * Purpose: Browser for shearch accommodation with some basics filters
 */

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup } from '@angular/forms';

import { FormErrorInfo } from '../../interfaces/form-error-info';
import { ValidatorErrorService } from '../../services/validator-error.service';

@Component({
  selector: 'alo-browser-filter',
  templateUrl: './browser-filter.component.html',
  styleUrls: ['./browser-filter.component.css'],
  providers: [ ValidatorErrorService ]
})
export class BrowserFilterComponent {

  public isFilterBrowserVisible: boolean;
  private formErrorInfo: FormErrorInfo;
  constructor(
    private __router: Router,
    private __valError: ValidatorErrorService
  ) {
    this.isFilterBrowserVisible = false;
    this.formErrorInfo = {
      errorsInfo: [
        {
          fieldName: 'address',
          nameShow: 'Dirección'
        },
        {
          fieldName: 'city',
          nameShow: 'Ciudad'
        },
        {
          fieldName: 'typeHome',
          nameShow: 'Tipo de alojamiento'
        },
        {
          fieldName: 'nGuest',
          nameShow: 'Numero de huespedes'
        }
      ]
    };
  }

  /**
   * Set the visisble status to the browser
   * @param {boolean} status state of the visibility of the browser's filters
   */
  public setFilterBrowserStatus(status: boolean): void {
    this.isFilterBrowserVisible = status;
  }

  /**
   * Evalue the shearch form and navegate to the page lhome using the preferences fixed
   * @param { FormGroup } formShearch form for shearch homes
   */
  public shearchHome( formShearch: FormGroup ): void {
    if (formShearch.valid === true) {
      // TODO navigation
    } else {
      this.__valError.checkErrors(formShearch, this.formErrorInfo);
    }
  }
}
