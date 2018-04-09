import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HomeDetailsModule } from '../../../components/home-details/home-details.module';
import { PageHomeComponent } from './page-home.component';
import { HomeValorationsModule } from '../../../components/home-valorations/home-valorations.module';
import { GalleryShowModule } from '../../../components/gallery-show/gallery-show.module';

describe('PageHomeComponent', () => {
  let component: PageHomeComponent;
  let fixture: ComponentFixture<PageHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageHomeComponent ],
      imports: [
        HomeDetailsModule,
        BrowserAnimationsModule,
        GalleryShowModule,
        HomeValorationsModule
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
