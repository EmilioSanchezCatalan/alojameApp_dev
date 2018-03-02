import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { BrowserFilterMovileModule } from '../../components/browser-filter-movile/browser-filter-movile.module';
import { BrowserFilterModule } from '../../components/browser-filter/browser.filter.module';
import { PageHomeComponent } from './page-home.component';

describe('PageHomeComponent', () => {
  let component: PageHomeComponent;
  let fixture: ComponentFixture<PageHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageHomeComponent ],
      imports: [
        BrowserFilterModule,
        BrowserFilterMovileModule,
        RouterTestingModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
