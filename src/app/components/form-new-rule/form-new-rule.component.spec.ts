import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatSlideToggleModule } from '@angular/material';
import { FormsModule } from '@angular/forms';

import { FormNewRuleComponent } from './form-new-rule.component';
import { TypeRuleModule } from '../../pipes/type-rule/type-rule.module';

describe('FormNewRuleComponent', () => {
  let component: FormNewRuleComponent;
  let fixture: ComponentFixture<FormNewRuleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormNewRuleComponent ],
      imports: [
        MatSlideToggleModule,
        FormsModule,
        TypeRuleModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormNewRuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('test fontMinusHoverEffect()', () => {
    it('should toggle the class into the font tag', () => {
      let iTag = <HTMLFontElement> document.createElement('i');
      iTag.setAttribute('class', 'fa fa-minus-square-o');
      component.fontMinusHoverEffect(iTag);
    });
    it('should be not toggle the class', () => {
      let iTag = <HTMLFontElement> document.createElement('i');
      iTag.setAttribute('class', 'fa fa-minus-square-o minus-disabled');
      component.fontMinusHoverEffect(iTag);
    });
  });
  describe('test fontPlusHoverEffect()', () => {
    it('should toggle the class into the font tag', () => {
      let iTag = <HTMLFontElement> document.createElement('i');
      iTag.setAttribute('class', 'fa fa-plus-square-o');
      component.fontPlusHoverEffect(iTag);
    });
    it('should be not toggle the class', () => {
      let iTag = <HTMLFontElement> document.createElement('i');
      iTag.setAttribute('class', 'fa fa-plus-square-o plus-disabled');
      component.fontPlusHoverEffect(iTag);
    });
  });
  describe('test rangeListRules()', () => {
    it('should return a list of elemnet\'s number ', () => {
      expect(component.rangeListRules().length).toBe(1);
    });
  });
  describe('test addNewRule()', () => {
    it('should add a rule into a listRules', () => {
      let iTag = <HTMLFontElement> document.createElement('i');
      component.addNewRule(iTag);
      expect(component.listRules.items.length).toBe(1);
    });
    it('should not add a rule', () => {
      let iTag = <HTMLFontElement> document.createElement('i');
      iTag.setAttribute('class', 'fa fa-plus-square-o plus-disabled');
      component.addNewRule(iTag);
      expect(component.listRules.items.length).toBe(0);
    });
  });
  describe('test removeRule()', () => {
    it('should remove a rule into the listRules', () => {
      let iTag = <HTMLFontElement> document.createElement('i');
      component.addNewRule(iTag);
      component.removeRule(0);
    });
  });
  describe('test changeTypeRule()', () => {
    it('should be change the status of the rule type', () => {
      let iTag = <HTMLFontElement> document.createElement('i');
      component.addNewRule(iTag);
      component.changeTypeRule(0);
      component.changeTypeRule(0);
    });
  });
});
