import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageStdProfileShowComponent } from './page-std-profile-show.component';

describe('PageStdProfileShowComponent', () => {
  let component: PageStdProfileShowComponent;
  let fixture: ComponentFixture<PageStdProfileShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageStdProfileShowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageStdProfileShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
