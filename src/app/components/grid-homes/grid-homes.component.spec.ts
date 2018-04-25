import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { GridHomesComponent } from './grid-homes.component';
import { CardHomeModule } from '../card-home/card-home.module';
import { AloPaginationModule } from '../alo-pagination/alo-pagination.module';

describe('GridHomesComponent', () => {
  let component: GridHomesComponent;
  let fixture: ComponentFixture<GridHomesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridHomesComponent ],
      imports: [
        CardHomeModule,
        AloPaginationModule,
        RouterTestingModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridHomesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('test gotoCreateHome()', () => {
    it('should bee go to the page create home', () => {
      component.gotoCreateHome();
    });
  });
});
