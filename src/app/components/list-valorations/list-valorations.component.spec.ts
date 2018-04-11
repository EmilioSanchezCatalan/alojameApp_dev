import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListValorationsComponent } from './list-valorations.component';

describe('ListValorationsComponent', () => {
  let component: ListValorationsComponent;
  let fixture: ComponentFixture<ListValorationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListValorationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListValorationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
