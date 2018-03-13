import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {MatSliderModule, MatCheckboxModule, MatDatepickerModule} from '@angular/material';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';

import { ButtonFilterModule } from '../button-filter/button-filter.module';
import { FiltersComponent } from './filters.component';

describe('FiltersComponent', () => {
  let component: FiltersComponent;
  let fixture: ComponentFixture<FiltersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FiltersComponent ],
      imports: [
        OwlDateTimeModule,
        OwlNativeDateTimeModule,
        ButtonFilterModule,
        MatSliderModule,
        MatCheckboxModule,
        MatDatepickerModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('test setEventMoreFilters', () => {
    it('should be indicate that the button more filters is clicked', () => {
      component.setEventMoreFilters();
    });
  });
});
