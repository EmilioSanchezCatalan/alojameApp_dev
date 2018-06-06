import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AloLoadSpinnerComponent } from './alo-load-spinner.component';

describe('AloLoadSpinnerComponent', () => {
  let component: AloLoadSpinnerComponent;
  let fixture: ComponentFixture<AloLoadSpinnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AloLoadSpinnerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AloLoadSpinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
