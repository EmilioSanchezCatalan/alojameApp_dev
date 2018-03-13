import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonFilterComponent } from './button-filter.component';

describe('ButtonFilterComponent', () => {
  let component: ButtonFilterComponent;
  let fixture: ComponentFixture<ButtonFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtonFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('test setIsFiltering()', () => {
    it('should be change de filtering to the indicated ', () => {
      component.setIsFiltering(true);
      expect(component.isFiltering).toBeTruthy();
      component.setIsFiltering(false);
      expect(component.isFiltering).toBeFalsy();
    });
  });

  describe('test setFilteredEvent', () => {
    it('should be emit a event Filtered', () => {
      component.setFilteredEvent();
    });
  });

  describe('test setRestartEvent', () => {
    it('should be emmit the event Restart', () => {
      component.setRestartEvent();
    });
  });
});
