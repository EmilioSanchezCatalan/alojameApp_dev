import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { PageStdMessageComponent } from './page-std-message.component';
import { ChatMessageModule } from '../../../../components/chat-message/chat-message.module';

describe('PageStdMessageComponent', () => {
  let component: PageStdMessageComponent;
  let fixture: ComponentFixture<PageStdMessageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageStdMessageComponent ],
      imports: [
        ChatMessageModule,
        RouterTestingModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageStdMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
