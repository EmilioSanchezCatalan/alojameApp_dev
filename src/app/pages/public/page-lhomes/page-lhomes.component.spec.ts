import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AgmCoreModule } from '@agm/core';
import { MatCheckboxModule, MatSliderModule } from '@angular/material';
import { FormsModule } from '@angular/forms';

import { PageLhomesComponent } from './page-lhomes.component';
import { GridHomesModule } from '../../../components/grid-homes/grid-homes.module';
import { FiltersModule } from '../../../components/filters/filters.module';

describe('PageLhomesComponent', () => {
  let component: PageLhomesComponent;
  let fixture: ComponentFixture<PageLhomesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageLhomesComponent ],
      imports: [
        GridHomesModule,
        FiltersModule,
        MatCheckboxModule,
        MatSliderModule,
        FormsModule,
        AgmCoreModule.forRoot({
          apiKey: 'AIzaSyBmqtAnnZJ8C20gOdjmZKCq4SPaByTXMnk'
        })
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageLhomesComponent);
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
