import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AloPopupComponent } from './alo-popup.component';

describe('AloPopupComponent', () => {
  let component: AloPopupComponent;
  let fixture: ComponentFixture<AloPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AloPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AloPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
