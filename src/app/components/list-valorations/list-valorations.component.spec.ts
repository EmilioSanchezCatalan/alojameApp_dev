import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material';

import { ListValorationsComponent } from './list-valorations.component';
import { MakeValorationStudentModule } from '../make-valoration-student/make-valoration-student.module';

describe('ListValorationsComponent', () => {
  let component: ListValorationsComponent;
  let fixture: ComponentFixture<ListValorationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListValorationsComponent ],
      imports: [
        MatDialogModule,
        BrowserAnimationsModule,
        MakeValorationStudentModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListValorationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  describe('test createValorationStd()', () => {
    it('should be open a Register popup', () => {
      component.createValorationStd();
      fixture.detectChanges();
      component.popupValorationStd.close();
      fixture.detectChanges();
    });
  });
});
