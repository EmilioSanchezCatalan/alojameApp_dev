import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeValorationsComponent } from './home-valorations.component';

describe('HomeValorationsComponent', () => {
  let component: HomeValorationsComponent;
  let fixture: ComponentFixture<HomeValorationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeValorationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeValorationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
