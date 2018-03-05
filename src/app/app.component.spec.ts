import { Component } from '@angular/core';
import { TestBed, async, inject, fakeAsync, tick, ComponentFixture} from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MatProgressSpinnerModule } from '@angular/material';
import { Router, Routes } from '@angular/router';

import { NavbarSimpleModule } from './components/navbar-simple/navbar-simple.module';
import { AppComponent } from './app.component';


// @Component({
//   template: `Home`
// })
// class HomeComponent {
// }

// const routes: Routes = [
//   {path: 'home', component: HomeComponent},
// ];

// import {Injectable} from '@angular/core';
// import { NavigationEnd } from '@angular/router';
// import {Subject} from 'rxjs/Subject';

// @Injectable()
// export class RouterStub {
//   public url;
//   private subject = new Subject();
//   public events = this.subject.asObservable();

//   navigate(url: string) {
//     this.url = url;
//     this.triggerNavEvents(url);
//   }

//   triggerNavEvents(url) {
//     let ne = new NavigationEnd(0, url, null);
//     this.subject.next(ne);
//   }
// }


describe('AppComponent', () => {
  let router: Router;
  let fixture: ComponentFixture<AppComponent>;
  let app: AppComponent;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        // HomeComponent
      ],
      imports: [
        NavbarSimpleModule,
        RouterTestingModule,
        MatProgressSpinnerModule
      ]
    })
    .compileComponents();

    router = TestBed.get(Router);
    router.initialNavigation();
  }));

  it('should create the app', async(() => {
    fixture = TestBed.createComponent(AppComponent);
    app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();

  }));
  describe('test Routing', () => {
    it ('should chack if is loading or not a page', () => {
      // TODO Teminar el test
    });
  });
});
