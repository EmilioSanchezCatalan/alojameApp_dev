import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageSubsHomesComponent } from './page-subs-homes.component';

describe('PageSubsHomesComponent', () => {
  let component: PageSubsHomesComponent;
  let fixture: ComponentFixture<PageSubsHomesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageSubsHomesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageSubsHomesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
