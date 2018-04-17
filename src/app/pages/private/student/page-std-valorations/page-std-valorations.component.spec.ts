import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { PageStdValorationsComponent } from './page-std-valorations.component';
import { ToolbarStudentModule } from '../../../../components/toolbar-student/toolbar-student.module';
import { ListValorationsModule } from '../../../../components/list-valorations/list-valorations.module';
import { AloPaginationModule } from '../../../../components/alo-pagination/alo-pagination.module';

describe('PageStdValorationsComponent', () => {
  let component: PageStdValorationsComponent;
  let fixture: ComponentFixture<PageStdValorationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageStdValorationsComponent ],
      imports: [
        ToolbarStudentModule,
        ListValorationsModule,
        AloPaginationModule,
        RouterTestingModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageStdValorationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
