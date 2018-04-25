import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormHomeImgsComponent } from './form-home-imgs.component';
import { PopupImgUploadModule } from '../../popup-img-upload/popup-img-upload.module';

describe('FormHomeImgsComponent', () => {
  let component: FormHomeImgsComponent;
  let fixture: ComponentFixture<FormHomeImgsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormHomeImgsComponent ],
      imports: [
        PopupImgUploadModule,
        BrowserAnimationsModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormHomeImgsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('test openImgUploader()', () => {
    it('should be open a uploader-img popup', () => {
      component.openImgUploader();
      fixture.detectChanges();
      component.popupImgUpload.close();
      fixture.detectChanges();
    });
  });
});
