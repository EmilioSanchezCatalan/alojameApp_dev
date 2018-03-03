import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AloPopupHeaderComponent } from './alo-popup-header.component';

describe('AloPopupHeaderComponent', () => {
  let component: AloPopupHeaderComponent;
  let fixture: ComponentFixture<AloPopupHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AloPopupHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AloPopupHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('test closePopup()', () => {
    it('should emmit a close event', () => {
      component.closePopup();
    });
  });

  describe('test goBack()', () => {
    it('should emmit a back event', () => {
      component.goBack();
    });
  });
});
