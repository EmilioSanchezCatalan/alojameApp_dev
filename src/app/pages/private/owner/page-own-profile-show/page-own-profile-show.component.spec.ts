import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageOwnProfileShowComponent } from './page-own-profile-show.component';

describe('PageOwnProfileShowComponent', () => {
  let component: PageOwnProfileShowComponent;
  let fixture: ComponentFixture<PageOwnProfileShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageOwnProfileShowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageOwnProfileShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
