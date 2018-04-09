import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomersControlComponent } from './roomers-control.component';

describe('RoomersControlComponent', () => {
  let component: RoomersControlComponent;
  let fixture: ComponentFixture<RoomersControlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoomersControlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoomersControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
