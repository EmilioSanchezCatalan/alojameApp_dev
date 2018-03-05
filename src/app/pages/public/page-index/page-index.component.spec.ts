import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { BrowserFilterMovileModule } from '../../../components/browser-filter-movile/browser-filter-movile.module';
import { BrowserFilterModule } from '../../../components/browser-filter/browser.filter.module';
import { PageIndexComponent } from './page-index.component';

describe('PageHomeComponent', () => {
  let component: PageIndexComponent;
  let fixture: ComponentFixture<PageIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageIndexComponent ],
      imports: [
        BrowserFilterModule,
        BrowserFilterMovileModule,
        RouterTestingModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
