import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule, MatDialog, MatDialogRef } from '@angular/material';

import { PopupImgUploadComponent } from './popup-img-upload.component';
import { AloPopupModule } from '../../components/alo-popup/alo-popup.module';

describe('PopupImgUploadComponent', () => {
  let component: PopupImgUploadComponent;
  let dialog: MatDialog;
  let dialogRef: MatDialogRef<PopupImgUploadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopupImgUploadComponent ],
      imports: [
        BrowserAnimationsModule,
        MatDialogModule,
        AloPopupModule
      ],
    })
    .overrideModule(BrowserDynamicTestingModule, {
      set: {
        entryComponents: [ PopupImgUploadComponent ]
      }
    })
    .compileComponents();
  }));

  beforeEach(() => {
    dialog = TestBed.get(MatDialog);
    dialogRef = dialog.open(PopupImgUploadComponent);
    component = dialogRef.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('test closePopup()', () => {
    it('should be close the popup and send false', () => {
      dialogRef.afterClosed().subscribe(
        response => {
          expect(response).toBeFalsy();
        }
      );
      component.closePopup();
    });
  });

});
