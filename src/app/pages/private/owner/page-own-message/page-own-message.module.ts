import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageOwnMessageComponent } from './page-own-message.component';
import { ChatMessageModule } from '../../../../components/chat-message/chat-message.module';
import { AloLoadSpinnerModule } from '../../../../components/alo-load-spinner/alo-load-spinner.module';

@NgModule({
  declarations: [PageOwnMessageComponent],
  imports: [
    ChatMessageModule,
    CommonModule,
    AloLoadSpinnerModule
  ],
  exports: [PageOwnMessageComponent]
})
export class PageOwnMessageModule {}
