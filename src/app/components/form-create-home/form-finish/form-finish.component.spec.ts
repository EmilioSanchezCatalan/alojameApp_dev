import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { FormFinishComponent } from './form-finish.component';

describe('FormFinishComponent', () => {
  let component: FormFinishComponent;
  let fixture: ComponentFixture<FormFinishComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormFinishComponent ],
      imports: [RouterTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormFinishComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('test gotoHome()', () => {
    it('should navigate to the home page', () => {
      component.gotoHome();
    });
  });
});
