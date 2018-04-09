import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomersRequestComponent } from './roomers-request.component';

describe('RoomersRequestComponent', () => {
  let component: RoomersRequestComponent;
  let fixture: ComponentFixture<RoomersRequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoomersRequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoomersRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
