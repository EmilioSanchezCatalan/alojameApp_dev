import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AgmCoreModule } from '@agm/core';

import { PageLhomesComponent } from './page-lhomes.component';
import { GridHomesModule } from '../../../components/grid-homes/grid-homes.module';

describe('PageLhomesComponent', () => {
  let component: PageLhomesComponent;
  let fixture: ComponentFixture<PageLhomesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageLhomesComponent ],
      imports: [
        GridHomesModule,
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
});
