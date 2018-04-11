import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { PageOwnMessagesComponent } from './page-own-messages.component';
import { ToolbarOwnerModule } from '../../../../components/toolbar-owner/toolbar-owner.module';
import { ListMessagesModule } from '../../../../components/list-messages/list-messages.module';
import { AloPaginationModule } from '../../../../components/alo-pagination/alo-pagination.module';

describe('PageOwnMessagesComponent', () => {
  let component: PageOwnMessagesComponent;
  let fixture: ComponentFixture<PageOwnMessagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageOwnMessagesComponent ],
      imports: [
        RouterTestingModule,
        ToolbarOwnerModule,
        ListMessagesModule,
        AloPaginationModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageOwnMessagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
