import { async, TestBed } from '@angular/core/testing';

import {BrowserDynamicTestingModule} from '@angular/platform-browser-dynamic/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {MatDialogModule, MatDialog, MatDialogRef} from '@angular/material';
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
        MatDialogModule
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
    it('should be set user_type to undefined', () => {
      component.restoreUserType();
      expect(component.user_type).toBeUndefined();
    });
  });
  describe('test restoreUserType()', () => {
    it('should be set the correct user type register', () => {
      component.setUserType('student');
      expect(component.user_type).toBe('student');
      component.setUserType('owner');
      expect(component.user_type).toBe('owner');
    });
  });
  describe('test dateGenerate()', () => {
    it('should be generate a list of number 1910-now', () => {
      component.dateGenerate();
      expect(component.years_list.length).toBeGreaterThan(2);
      expect(component.years_list[0]).toBe(new Date().getFullYear());
      expect(component.years_list[component.years_list.length - 1]).toBe(1910);
    });
  });
});
