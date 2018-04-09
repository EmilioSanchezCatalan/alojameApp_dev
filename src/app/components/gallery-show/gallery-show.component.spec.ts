import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { LightboxModule } from 'angular2-lightbox';

import { GalleryShowComponent } from './gallery-show.component';

describe('GalleryShowComponent', () => {
  let component: GalleryShowComponent;
  let fixture: ComponentFixture<GalleryShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GalleryShowComponent ],
      imports: [LightboxModule  ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GalleryShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('test openGallery()', () => {
    it('should open a lightbox with all the home\'s photografies', () => {
      component.openGallery();
    });
  });
});
