import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatRadioModule} from '@angular/material';

import { FormHomeTypeComponent } from './form-home-type.component';
import { AloCounterModule } from '../../alo-counter/alo-counter.module';

describe('FormHomeTypeComponent', () => {
  let component: FormHomeTypeComponent;
  let fixture: ComponentFixture<FormHomeTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormHomeTypeComponent ],
      imports: [
        MatRadioModule,
        AloCounterModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormHomeTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
