import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormHomeAddressComponent } from './form-home-address.component';

describe('FormHomeAddressComponent', () => {
  let component: FormHomeAddressComponent;
  let fixture: ComponentFixture<FormHomeAddressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormHomeAddressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormHomeAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
