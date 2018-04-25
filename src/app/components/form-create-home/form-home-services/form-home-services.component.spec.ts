import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatCheckboxModule } from '@angular/material';

import { FormHomeServicesComponent } from './form-home-services.component';

describe('FormHomeServicesComponent', () => {
  let component: FormHomeServicesComponent;
  let fixture: ComponentFixture<FormHomeServicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormHomeServicesComponent ],
      imports: [MatCheckboxModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormHomeServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
