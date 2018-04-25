import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AloCounterComponent } from './alo-counter.component';

describe('AloCounterComponent', () => {
  let component: AloCounterComponent;
  let fixture: ComponentFixture<AloCounterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AloCounterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AloCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('test sumCounter()', () => {
    it('should be sum a unit', () => {
      expect(component.total).toBe(0);
      component.sumCounter();
      expect(component.total).toBe(1);
    });
    it('should not sum a unit', () => {
      component.max = 0;
      expect(component.total).toBe(0);
      component.sumCounter();
      expect(component.total).toBe(0);
    });
  });
  describe('test resCounter()', () => {
    it('should be res a unit', () => {
      expect(component.total).toBe(0);
      component.resCounter();
      expect(component.total).toBe(-1);
    });
    it('should be not res a unit', () => {
      component.min = 0;
      expect(component.total).toBe(0);
      component.resCounter();
      expect(component.total).toBe(0);
    });
  });
});
