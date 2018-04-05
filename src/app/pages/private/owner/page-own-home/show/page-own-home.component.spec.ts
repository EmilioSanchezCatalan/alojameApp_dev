import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageOwnHomeComponent } from './page-own-home.component';

describe('PageOwnHomeComponent', () => {
  let component: PageOwnHomeComponent;
  let fixture: ComponentFixture<PageOwnHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageOwnHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageOwnHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
