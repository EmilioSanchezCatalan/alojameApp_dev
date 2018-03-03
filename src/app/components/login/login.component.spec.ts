import { async, TestBed } from '@angular/core/testing';

import {BrowserDynamicTestingModule} from '@angular/platform-browser-dynamic/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatDialogModule, MatDialog, MatDialogRef} from '@angular/material';

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
        AloPopupModule
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
});
