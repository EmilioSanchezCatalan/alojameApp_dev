import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageStdMessageComponent } from './page-std-message.component';

describe('PageStdMessageComponent', () => {
  let component: PageStdMessageComponent;
  let fixture: ComponentFixture<PageStdMessageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageStdMessageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageStdMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
