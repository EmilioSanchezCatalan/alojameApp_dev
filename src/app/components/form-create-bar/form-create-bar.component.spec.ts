import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCreateBarComponent } from './form-create-bar.component';

describe('FormCreateBarComponent', () => {
  let component: FormCreateBarComponent;
  let fixture: ComponentFixture<FormCreateBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormCreateBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormCreateBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('test emitBackEvent()', () => {
    it('should be emit a event back', () => {
      component.emitBackEvent();
    });
  });

  describe('test emitContinueEvent()', () => {
    it('should be emit a event continue', () => {
      component.emitContinueEvent();
    });
  });
});
