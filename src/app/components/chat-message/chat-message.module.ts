import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { ChatMessageComponent } from './chat-message.component';


@NgModule({
  declarations: [ChatMessageComponent],
  imports: [
    RouterModule,
    CommonModule
  ],
  exports: [ChatMessageComponent]
})
export class ChatMessageModule {}
