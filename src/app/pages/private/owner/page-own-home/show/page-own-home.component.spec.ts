import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { PageOwnHomeComponent } from './page-own-home.component';
import { HomeDetailsModule } from '../../../../../components/home-details/home-details.module';
import { HomeValorationsModule } from '../../../../../components/home-valorations/home-valorations.module';
import { GalleryShowModule } from '../../../../../components/gallery-show/gallery-show.module';
import { RoomerDetailsModule } from '../../../../../components/roomer-details/roomer-details.module';

describe('PageOwnHomeComponent', () => {
  let component: PageOwnHomeComponent;
  let fixture: ComponentFixture<PageOwnHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageOwnHomeComponent ],
      imports: [
        HomeDetailsModule,
        HomeValorationsModule,
        GalleryShowModule,
        BrowserAnimationsModule,
        RoomerDetailsModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageOwnHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
