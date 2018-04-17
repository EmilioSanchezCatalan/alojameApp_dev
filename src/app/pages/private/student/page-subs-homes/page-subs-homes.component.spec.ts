import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { PageSubsHomesComponent } from './page-subs-homes.component';
import { ToolbarStudentModule } from '../../../../components/toolbar-student/toolbar-student.module';
import { GridHomesModule } from '../../../../components/grid-homes/grid-homes.module';

describe('PageSubsHomesComponent', () => {
  let component: PageSubsHomesComponent;
  let fixture: ComponentFixture<PageSubsHomesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageSubsHomesComponent ],
      imports: [
        ToolbarStudentModule,
        RouterTestingModule,
        GridHomesModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageSubsHomesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
