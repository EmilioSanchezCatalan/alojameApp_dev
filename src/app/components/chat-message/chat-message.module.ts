import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ChatMessageComponent } from './chat-message.component';
import { AloLoadSpinnerModule } from '../../components/alo-load-spinner/alo-load-spinner.module';

@NgModule({
  declarations: [ChatMessageComponent],
  imports: [
    RouterModule,
    CommonModule,
    FormsModule,
    AloLoadSpinnerModule
  ],
  exports: [ChatMessageComponent]
})
export class ChatMessageModule {}
