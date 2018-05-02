import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormStdInfoComponent } from './form-std-info.component';

describe('FormStdInfoComponent', () => {
  let component: FormStdInfoComponent;
  let fixture: ComponentFixture<FormStdInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormStdInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormStdInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
