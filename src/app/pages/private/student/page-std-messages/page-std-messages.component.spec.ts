import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageStdMessagesComponent } from './page-std-messages.component';

describe('PageStdMessagesComponent', () => {
  let component: PageStdMessagesComponent;
  let fixture: ComponentFixture<PageStdMessagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageStdMessagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageStdMessagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
