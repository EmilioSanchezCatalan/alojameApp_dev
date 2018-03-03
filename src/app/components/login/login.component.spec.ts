import { async, TestBed, inject} from '@angular/core/testing';

import {BrowserDynamicTestingModule} from '@angular/platform-browser-dynamic/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { FormsModule, FormBuilder, Validators} from '@angular/forms';
import { MatDialogModule, MatDialog, MatDialogRef, MatSnackBarModule} from '@angular/material';

import { ValidatorErrorService } from '../../services/validator-error.service';
import { AloPopupModule } from '../../components/alo-popup/alo-popup.module';
import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let dialog: MatDialog;
  let dialogRef: MatDialogRef<LoginComponent>;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports: [
        BrowserAnimationsModule,
        CommonModule,
        FormsModule,
        MatDialogModule,
        MatSnackBarModule,
        AloPopupModule
      ],
      providers: [
        ValidatorErrorService,
        FormBuilder
      ]
    })
    .overrideModule(BrowserDynamicTestingModule, {
      set: {
        entryComponents: [ LoginComponent ]
      }
})
    .compileComponents();
  }));

  beforeEach(() => {
    dialog = TestBed.get(MatDialog);
    dialogRef = dialog.open(LoginComponent);
    component = dialogRef.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  describe('test setEmailFocus()', () => {
    it('should be set attribute isEmailFocus to true', () => {
      component.setEmailFocus();
      expect(component.isEmailFocus).toBeTruthy();
    });
  });
  describe('test setEmailNotFocus()', () => {
    it('should be set attribute isEmailFocus to false', () => {
      component.setEmailNotFocus();
      expect(component.isEmailFocus).toBeFalsy();
    });
  });
  describe('test setPassForgot()', () => {
    it('should set the state of isPassForgot', () => {
      component.setPassForgot(false);
      expect(component.isPassForgot).toBeFalsy();
      component.setPassForgot(true);
      expect(component.isPassForgot).toBeTruthy();
    });
  });
  describe('test closePopup()', () => {
    it('should be close the popup and send false', () => {
      dialogRef.afterClosed().subscribe(
        response => {
          expect(response).toBeFalsy();
        }
      );
      component.closePopup();
    });
  });
  describe('test openRegister()', () => {
    it('should be close the popup and send the text "register" ', () => {
      dialogRef.afterClosed().subscribe(
        response => {
          expect(response).toBe('register');
        }
      );
      component.openRegister();
    });
  });
  describe('test setLogin()', () => {
    it('should be send the execute the login and validate the form', inject([FormBuilder], (fb: FormBuilder) => {
      let formLogin = fb.group({
        'username': ['', Validators.required],
        'password': ['', Validators.required]
      });
      component.setLogin( formLogin );

      formLogin = fb.group({
        'username': ['prueba@example.com', Validators.required],
        'password': ['123456', Validators.required]
      });
      component.setLogin( formLogin );
    }));
  });

  describe('test setRecover()', () => {
    it('should be send the recovery password and validate form', inject([FormBuilder], (fb: FormBuilder) => {
      let formLogin = fb.group({
        'emailRecov': ['', Validators.required]
      });
      component.setRecover( formLogin );

      formLogin = fb.group({
        'emailRecov': ['prueba@example.com', Validators.required],
      });
      component.setRecover( formLogin );
    }));
  });
});
