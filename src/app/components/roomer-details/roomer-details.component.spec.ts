import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomerDetailsComponent } from './roomer-details.component';

describe('RoomerDetailsComponent', () => {
  let component: RoomerDetailsComponent;
  let fixture: ComponentFixture<RoomerDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoomerDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoomerDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
