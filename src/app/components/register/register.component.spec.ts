import { async, TestBed, inject} from '@angular/core/testing';

import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { FormsModule, FormBuilder, Validators} from '@angular/forms';
import { MatDialogModule, MatDialog, MatDialogRef, MatSnackBarModule } from '@angular/material';

import { ValidatorErrorService } from '../../services/validator-error.service';
import { AloPopupModule } from '../../components/alo-popup/alo-popup.module';
import { RegisterComponent } from './register.component';

describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let dialog: MatDialog;
  let dialogRef: MatDialogRef<RegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterComponent ],
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
        entryComponents: [ RegisterComponent ]
      }
    })
    .compileComponents();
  }));

  beforeEach(() => {
    dialog = TestBed.get(MatDialog);
    dialogRef = dialog.open(RegisterComponent);
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
  describe('test openLogin()', () => {
    it('should be close the popup and send the text "login"', () => {
      dialogRef.afterClosed().subscribe(
        response => {
          expect(response).toBe('login');
        }
      );
      component.openLogin();
    });
  });
  describe('test restoreUserType()', () => {
    it('should be set userType to undefined', () => {
      component.restoreUserType();
      expect(component.userType).toBeUndefined();
    });
  });
  describe('test restoreUserType()', () => {
    it('should be set the correct user type register', () => {
      component.setUserType('student');
      expect(component.userType).toBe('student');
      component.setUserType('owner');
      expect(component.userType).toBe('owner');
    });
  });
  describe('test dateGenerate()', () => {
    it('should be generate a list of number 1910-now', () => {
      component.dateGenerate();
      expect(component.yearsList.length).toBeGreaterThan(2);
      expect(component.yearsList[0]).toBe(new Date().getFullYear());
      expect(component.yearsList[component.yearsList.length - 1]).toBe(1910);
    });
  });
  describe('test setRegister()', () => {
    it('should connect and validate the register of a new user', inject([FormBuilder], (fb: FormBuilder) => {
      let formRegister = fb.group({
        'email': ['', Validators.required],
        'name': ['', Validators.required],
        'surname': ['', Validators.required],
        'password': ['', Validators.required],
        'birthMonth': ['', Validators.required],
        'birthDay': ['', Validators.required],
        'birthYear': ['', Validators.required],
        'userType': ['', Validators.required]
      });
      component.setRegister(formRegister);

      formRegister = fb.group({
        'email': ['prueba@example.com', Validators.required],
        'name': ['prueba', Validators.required],
        'surname': ['prueba', Validators.required],
        'password': ['123456', Validators.required],
        'birthMonth': ['30', Validators.required],
        'birthDay': ['1', Validators.required],
        'birthYear': ['1998', Validators.required],
        'userType': ['owner', Validators.required]
      });
      component.setRegister(formRegister);
    }));
  });
});
