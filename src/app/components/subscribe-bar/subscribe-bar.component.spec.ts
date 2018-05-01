import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscribeBarComponent } from './subscribe-bar.component';

describe('SubscribeBarComponent', () => {
  let component: SubscribeBarComponent;
  let fixture: ComponentFixture<SubscribeBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubscribeBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubscribeBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
