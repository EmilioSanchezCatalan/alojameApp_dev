import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { PageStdMessagesComponent } from './page-std-messages.component';
import { ToolbarStudentModule } from '../../../../components/toolbar-student/toolbar-student.module';
import { ListMessagesModule } from '../../../../components/list-messages/list-messages.module';
import { AloPaginationModule } from '../../../../components/alo-pagination/alo-pagination.module';

describe('PageStdMessagesComponent', () => {
  let component: PageStdMessagesComponent;
  let fixture: ComponentFixture<PageStdMessagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageStdMessagesComponent ],
      imports: [
        ToolbarStudentModule,
        ListMessagesModule,
        AloPaginationModule,
        RouterTestingModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageStdMessagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
