import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material';

import { NavbarComponent } from './navbar.component';

fdescribe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavbarComponent ],
      imports: [
        MatButtonModule,
        BrowserAnimationsModule
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
  describe( 'Test openSideNav function', () => {
    it('should be change params isDisplaySideNav and sidenavState to active state', () => {
      component.openSideNav();
      expect(component.isDisplaySideNav).toBeTruthy();
      expect(component.sidenavState).toBe('in');
    });
  });
  describe( 'Test closeSideNav function', () => {
    it('should be change params isDisplaySideNav and sidenavState to inactive state', () => {
      component.closeSideNav();
      expect(component.sidenavState).toBe('out');
      setTimeout(() => {
        expect(component.isDisplaySideNav).toBeFalsy();
      }, 510);

    });
  });
});
