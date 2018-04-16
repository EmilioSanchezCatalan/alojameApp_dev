/**
 * @author Emilio Sánchez Catalán <esc00019@gmail.com>
 * Purpose: view the messages of the other user and allow to the user send meessages
 */

import { Component } from '@angular/core';

@Component({
  selector: 'alo-chat-message',
  templateUrl: './chat-message.component.html',
  styleUrls: ['./chat-message.component.css']
})
export class ChatMessageComponent {

  public userType: string;

  constructor() {
    this.userType = localStorage.getItem('userType');
  }

}
