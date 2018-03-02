import { TestBed, inject } from '@angular/core/testing';
import { MatSnackBarModule } from '@angular/material';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ValidatorErrorService } from './validator-error.service';
import { FormErrorInfo } from '../interfaces/form-error-info';

describe('ValidatorErrorService', () => {
  let form_tested: FormGroup;
  let formErrorInfo: FormErrorInfo;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        MatSnackBarModule,
        BrowserAnimationsModule
      ],
      providers: [
        ValidatorErrorService,
        FormBuilder
      ]
    });
  });

  beforeEach( inject([FormBuilder], (fb: FormBuilder) => {
    form_tested = fb.group({
      'address': ['', Validators.required ],
      'city': ['', Validators.required ],
      'typeHome': ['', Validators.required ],
      'nGuest': ['', Validators.required ]
    });
    formErrorInfo = {
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
  }));
  it('should be created', inject([ValidatorErrorService], (service: ValidatorErrorService) => {
    expect(service).toBeTruthy();
  }));

  describe('test checkErrors()', () => {
    it('should show a message with the forms error', inject([ValidatorErrorService], (service: ValidatorErrorService) => {
      service.checkErrors(form_tested, formErrorInfo);
    }));
  });
});
