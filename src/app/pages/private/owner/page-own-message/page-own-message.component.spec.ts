import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { PageOwnMessageComponent } from './page-own-message.component';
import { ChatMessageModule } from '../../../../components/chat-message/chat-message.module';

describe('PageOwnMessageComponent', () => {
  let component: PageOwnMessageComponent;
  let fixture: ComponentFixture<PageOwnMessageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageOwnMessageComponent ],
      imports: [
        ChatMessageModule,
        RouterTestingModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageOwnMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
