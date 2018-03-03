import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AloPopupContainerComponent } from './alo-popup-container.component';

describe('AloPopupContainerComponent', () => {
  let component: AloPopupContainerComponent;
  let fixture: ComponentFixture<AloPopupContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AloPopupContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AloPopupContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
