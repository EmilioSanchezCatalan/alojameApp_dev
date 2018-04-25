import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageStdProfileComponent } from './page-std-profile.component';

describe('PageStdProfileComponent', () => {
  let component: PageStdProfileComponent;
  let fixture: ComponentFixture<PageStdProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageStdProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageStdProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
