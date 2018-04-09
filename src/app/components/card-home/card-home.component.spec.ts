import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatCardModule } from '@angular/material';
import { RouterTestingModule } from '@angular/router/testing';

import { CardHomeComponent } from './card-home.component';


describe('CardHomeComponent', () => {
  let component: CardHomeComponent;
  let fixture: ComponentFixture<CardHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardHomeComponent ],
      imports: [
        MatCardModule,
        RouterTestingModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('test gotoShowHome()', () => {
    it('should be navegate to the home', () => {
      component.gotoShowHome();
    });
  });

  describe('test gotoStudentsHome()', () => {
    it('should be navegate to the home\'s students-control', () => {
      component.gotoStudentsHome();
    });
  });
});
