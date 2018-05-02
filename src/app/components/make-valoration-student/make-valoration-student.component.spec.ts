import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {BrowserDynamicTestingModule} from '@angular/platform-browser-dynamic/testing';
import { MatDialogModule, MatDialog, MatDialogRef} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MakeValorationStudentComponent } from './make-valoration-student.component';
import { AloPopupModule } from '../../components/alo-popup/alo-popup.module';

describe('MakeValorationStudentComponent', () => {
  let component: MakeValorationStudentComponent;
  let dialog: MatDialog;
  let dialogRef: MatDialogRef<MakeValorationStudentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MakeValorationStudentComponent ],
      imports: [
        AloPopupModule,
        BrowserAnimationsModule,
        MatDialogModule
      ]
    })
    .overrideModule(BrowserDynamicTestingModule, {
      set: {
        entryComponents: [ MakeValorationStudentComponent ]
        }
    })
    .compileComponents();
  }));

  beforeEach(() => {
    dialog = TestBed.get(MatDialog);
    dialogRef = dialog.open(MakeValorationStudentComponent);
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
