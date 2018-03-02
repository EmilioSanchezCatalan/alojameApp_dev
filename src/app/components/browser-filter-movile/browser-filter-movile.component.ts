/**
 * @author Emilio Sánchez <esc00019@gmail.com>
 * Purpose: Browser for shearch accommodation with some basics filters
 */
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { FormErrorInfo } from '../../interfaces/form-error-info';
import { ValidatorErrorService } from '../../services/validator-error.service';

@Component({
  selector: 'alo-browser-filter-movile',
  templateUrl: './browser-filter-movile.component.html',
  styleUrls: ['./browser-filter-movile.component.css'],
  providers: [ ValidatorErrorService ]
})
export class BrowserFilterMovileComponent {

  private formErrorInfo: FormErrorInfo;

  constructor(
    private __valError: ValidatorErrorService
  ) {
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
   * Evalue the shearch form and navegate to the page lhome using the preferences fixed
   * @param { FormGroup } formShearch form for shearch homes
   */
  public shearchHome( formShearch: FormGroup): void {
    if (formShearch.valid === true) {
      // TODO navigation
    } else {
      this.__valError.checkErrors(formShearch, this.formErrorInfo);
    }
  }
}
