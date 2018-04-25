import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatRadioModule } from '@angular/material';

import { FormHomeRulesComponent } from './form-home-rules.component';
import { FormNewRuleModule } from '../../form-new-rule/form-new-rule.module';

describe('FormHomeRulesComponent', () => {
  let component: FormHomeRulesComponent;
  let fixture: ComponentFixture<FormHomeRulesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormHomeRulesComponent ],
      imports: [
        MatRadioModule,
        FormNewRuleModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormHomeRulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
