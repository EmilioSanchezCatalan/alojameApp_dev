import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageLoginSuccessComponent } from './page-login-success.component';

describe('PageLoginSuccessComponent', () => {
  let component: PageLoginSuccessComponent;
  let fixture: ComponentFixture<PageLoginSuccessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageLoginSuccessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageLoginSuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
