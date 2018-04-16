import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageStdHomeComponent } from './page-std-home.component';

describe('PageHomeComponent', () => {
  let component: PageStdHomeComponent;
  let fixture: ComponentFixture<PageStdHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageStdHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageStdHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
