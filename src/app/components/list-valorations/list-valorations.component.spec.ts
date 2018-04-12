import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material';

import { ListValorationsComponent } from './list-valorations.component';
import { MakeValorationModule } from '../make-valoration/make-valoration.module';

describe('ListValorationsComponent', () => {
  let component: ListValorationsComponent;
  let fixture: ComponentFixture<ListValorationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListValorationsComponent ],
      imports: [
        MatDialogModule,
        BrowserAnimationsModule,
        MakeValorationModule
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
  describe('test createValoration()', () => {
    it('should be open a Register popup', () => {
      component.createValoration();
      fixture.detectChanges();
      component.popupValoration.close();
      fixture.detectChanges();
    });
  });
});
