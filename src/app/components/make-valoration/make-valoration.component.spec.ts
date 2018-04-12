import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {BrowserDynamicTestingModule} from '@angular/platform-browser-dynamic/testing';
import { MatDialogModule, MatDialog, MatDialogRef} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MakeValorationComponent } from './make-valoration.component';
import { AloPopupModule } from '../../components/alo-popup/alo-popup.module';

describe('MakeValorationComponent', () => {
  let component: MakeValorationComponent;
  let dialog: MatDialog;
  let dialogRef: MatDialogRef<MakeValorationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MakeValorationComponent ],
      imports: [
        AloPopupModule,
        BrowserAnimationsModule,
        MatDialogModule
      ]
    })
    .overrideModule(BrowserDynamicTestingModule, {
      set: {
        entryComponents: [ MakeValorationComponent ]
        }
    })
    .compileComponents();
  }));

  beforeEach(() => {
    dialog = TestBed.get(MatDialog);
    dialogRef = dialog.open(MakeValorationComponent);
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
