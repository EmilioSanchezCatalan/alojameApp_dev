import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageStdMessageComponent } from './page-std-message.component';
import { ChatMessageModule } from '../../../../components/chat-message/chat-message.module';
import { AloLoadSpinnerModule } from '../../../../components/alo-load-spinner/alo-load-spinner.module';

@NgModule({
  declarations: [PageStdMessageComponent],
  imports: [
    ChatMessageModule,
    AloLoadSpinnerModule,
    CommonModule
  ],
  exports: [PageStdMessageComponent]
})
export class PageStdMessageModule {}
