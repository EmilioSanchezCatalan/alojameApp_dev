import { NgModule } from '@angular/core';

import { PageOwnMessageComponent } from './page-own-message.component';
import { ChatMessageModule } from '../../../../components/chat-message/chat-message.module';

@NgModule({
  declarations: [PageOwnMessageComponent],
  imports: [ChatMessageModule],
  exports: [PageOwnMessageComponent]
})
export class PageOwnMessageModule {}
