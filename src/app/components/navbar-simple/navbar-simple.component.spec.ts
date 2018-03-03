import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatSnackBarModule } from '@angular/material';
import { RegisterModule } from '../register/register.module';
import { LoginModule } from '../login/login.module';
import { NavbarSimpleComponent } from './navbar-simple.component';

describe('NavbarSimpleComponent', () => {
  let component: NavbarSimpleComponent;
  let fixture: ComponentFixture<NavbarSimpleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavbarSimpleComponent ],
      imports: [
        MatButtonModule,
        MatSnackBarModule,
        BrowserAnimationsModule,
        RegisterModule,
        LoginModule
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarSimpleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
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
