import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowserFilterMovileComponent } from './browser-filter-movile.component';

describe('BrowserFilterMovileComponent', () => {
  let component: BrowserFilterMovileComponent;
  let fixture: ComponentFixture<BrowserFilterMovileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrowserFilterMovileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrowserFilterMovileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
