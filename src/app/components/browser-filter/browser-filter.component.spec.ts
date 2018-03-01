import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowserFilterComponent } from './browser-filter.component';

describe('BrowserFilterComponent', () => {
  let component: BrowserFilterComponent;
  let fixture: ComponentFixture<BrowserFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrowserFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrowserFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('test setFilterBrowserStatus()', () => {
    it('should change the state of the var isFilterBrowserVisible', () => {
      expect(component.isFilterBrowserVisible).toBeFalsy();
      component.setFilterBrowserStatus(true);
      expect(component.isFilterBrowserVisible).toBeTruthy();
    });
  });
});
