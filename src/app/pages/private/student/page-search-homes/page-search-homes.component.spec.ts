import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageSearchHomesComponent } from './page-search-homes.component';

describe('PageSearchHomesComponent', () => {
  let component: PageSearchHomesComponent;
  let fixture: ComponentFixture<PageSearchHomesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageSearchHomesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageSearchHomesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
