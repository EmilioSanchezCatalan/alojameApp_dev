import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AgmCoreModule } from '@agm/core';
import { MatCheckboxModule, MatSliderModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

import { PageSearchHomesComponent } from './page-search-homes.component';
import { GridHomesModule } from '../../../../components/grid-homes/grid-homes.module';
import { FiltersModule } from '../../../../components/filters/filters.module';

describe('PageSearchHomesComponent', () => {
  let component: PageSearchHomesComponent;
  let fixture: ComponentFixture<PageSearchHomesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageSearchHomesComponent ],
      imports: [
        GridHomesModule,
        FiltersModule,
        MatCheckboxModule,
        MatSliderModule,
        FormsModule,
        RouterTestingModule,
        AgmCoreModule.forRoot({
          apiKey: 'AIzaSyBmqtAnnZJ8C20gOdjmZKCq4SPaByTXMnk'
        })
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageSearchHomesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('test showFilterSection()', () => {
    it('should be show change the state of the var isFilterShowed', () => {
      component.showFilterSection();
      expect(component.isFilterShowed).toBeTruthy();
      component.showFilterSection();
      expect(component.isFilterShowed).toBeFalsy();
    });
  });
});
