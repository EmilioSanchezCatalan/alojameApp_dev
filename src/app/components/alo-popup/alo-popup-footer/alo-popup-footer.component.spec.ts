import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AloPopupFooterComponent } from './alo-popup-footer.component';

describe('AloPopupFooterComponent', () => {
  let component: AloPopupFooterComponent;
  let fixture: ComponentFixture<AloPopupFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AloPopupFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AloPopupFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
