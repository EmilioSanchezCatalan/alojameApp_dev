import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolbarStudentComponent } from './toolbar-student.component';

describe('ToolbarStudentComponent', () => {
  let component: ToolbarStudentComponent;
  let fixture: ComponentFixture<ToolbarStudentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToolbarStudentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolbarStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
