import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageOwnProfileConfComponent } from './page-own-profile-conf.component';

describe('PageOwnProfileConfComponent', () => {
  let component: PageOwnProfileConfComponent;
  let fixture: ComponentFixture<PageOwnProfileConfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageOwnProfileConfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageOwnProfileConfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
