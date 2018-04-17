import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageStdProfileConfComponent } from './page-std-profile-conf.component';

describe('PageStdProfileConfComponent', () => {
  let component: PageStdProfileConfComponent;
  let fixture: ComponentFixture<PageStdProfileConfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageStdProfileConfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageStdProfileConfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
