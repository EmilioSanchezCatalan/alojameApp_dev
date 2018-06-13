import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormHomeDescriptionComponent } from './form-home-description.component';

describe('FormHomeDescriptionComponent', () => {
  let component: FormHomeDescriptionComponent;
  let fixture: ComponentFixture<FormHomeDescriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormHomeDescriptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormHomeDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
