import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GridHomesComponent } from './grid-homes.component';

describe('GridHomesComponent', () => {
  let component: GridHomesComponent;
  let fixture: ComponentFixture<GridHomesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridHomesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridHomesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
