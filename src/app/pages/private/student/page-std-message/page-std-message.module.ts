import { NgModule } from '@angular/core';

import { PageStdMessageComponent } from './page-std-message.component';
import { ChatMessageModule } from '../../../../components/chat-message/chat-message.module';

@NgModule({
  declarations: [PageStdMessageComponent],
  imports: [ChatMessageModule],
  exports: [PageStdMessageComponent]
})
export class PageStdMessageModule {}
