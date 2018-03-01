import { async, ComponentFixture, TestBed, tick, fakeAsync } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatDialog, MatDialogRef } from '@angular/material';

import { RegisterModule } from '../register/register.module';
import { LoginModule } from '../login/login.module';
import { NavbarComponent } from './navbar.component';
import { LoginComponent } from '../login/login.component';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavbarComponent ],
      imports: [
        MatButtonModule,
        BrowserAnimationsModule,
        RegisterModule,
        LoginModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  describe( 'test openSideNav function', () => {
    it('should be change params isDisplaySideNav and sidenavState to active state', () => {
      component.openSideNav();
      expect(component.isDisplaySideNav).toBeTruthy();
      expect(component.sidenavState).toBe('in');
    });
  });
  describe( 'test closeSideNav function', () => {
    it('should be change params isDisplaySideNav and sidenavState to inactive state', () => {
      component.closeSideNav();
      expect(component.sidenavState).toBe('out');
      setTimeout(() => {
        expect(component.isDisplaySideNav).toBeFalsy();
      }, 510);

    });
  });
  describe('test openRegister()', () => {
    it('should be open a Register popup', () => {
      component.openRegister();
      fixture.detectChanges();
      component.popupRegister.close();
      fixture.detectChanges();
      component.openRegister();
      fixture.detectChanges();
      component.popupRegister.close('login');
      fixture.detectChanges();
    });
  });
  describe('test openLogin()', () => {
    it('should be open a Login popup', () => {
      component.openLogin();
      fixture.detectChanges();
      component.popupLogin.close();
      fixture.detectChanges();
      component.openLogin();
      fixture.detectChanges();
      component.popupLogin.close('register');
      fixture.detectChanges();
    });
  });
});
