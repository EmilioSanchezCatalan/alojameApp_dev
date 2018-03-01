import { TestBed, async } from '@angular/core/testing';

import { NavbarSimpleModule } from './components/navbar-simple/navbar-simple.module';
import { PagesModule } from './pages/pages.module';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [
        NavbarSimpleModule,
        PagesModule
      ]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
