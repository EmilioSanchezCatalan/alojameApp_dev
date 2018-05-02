import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {BrowserDynamicTestingModule} from '@angular/platform-browser-dynamic/testing';
import { MatDialogModule, MatDialog, MatDialogRef} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MakeValorationHomeComponent } from './make-valoration-home.component';
import { AloPopupModule } from '../../components/alo-popup/alo-popup.module';

describe('MakeValorationHomeComponent', () => {
  let component: MakeValorationHomeComponent;
  let dialog: MatDialog;
  let dialogRef: MatDialogRef<MakeValorationHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MakeValorationHomeComponent ],
      imports: [
        AloPopupModule,
        BrowserAnimationsModule,
        MatDialogModule
      ]
    })
    .overrideModule(BrowserDynamicTestingModule, {
      set: {
        entryComponents: [ MakeValorationHomeComponent ]
        }
    })
    .compileComponents();
  }));

  beforeEach(() => {
    dialog = TestBed.get(MatDialog);
    dialogRef = dialog.open(MakeValorationHomeComponent);
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
