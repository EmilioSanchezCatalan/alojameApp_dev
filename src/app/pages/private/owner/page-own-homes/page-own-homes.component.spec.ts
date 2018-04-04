import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageOwnHomesComponent } from './page-own-homes.component';

describe('PageOwnHomesComponent', () => {
  let component: PageOwnHomesComponent;
  let fixture: ComponentFixture<PageOwnHomesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageOwnHomesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageOwnHomesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
