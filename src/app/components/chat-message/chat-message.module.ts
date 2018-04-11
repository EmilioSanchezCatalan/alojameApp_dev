import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ChatMessageComponent } from './chat-message.component';


@NgModule({
  declarations: [ChatMessageComponent],
  imports: [RouterModule],
  exports: [ChatMessageComponent]
})
export class ChatMessageModule {}
