import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormOwnerInfoComponent } from './form-owner-info.component';

describe('FormOwnerInfoComponent', () => {
  let component: FormOwnerInfoComponent;
  let fixture: ComponentFixture<FormOwnerInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormOwnerInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormOwnerInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
