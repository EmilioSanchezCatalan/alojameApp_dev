import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageProfileShowComponent } from './page-profile-show.component';

describe('PageProfileShowComponent', () => {
  let component: PageProfileShowComponent;
  let fixture: ComponentFixture<PageProfileShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageProfileShowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageProfileShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
