/**
 * @author Emilio Sánchez Catalán <esc00019@gmail.com>
 * Purpose: view the messages of the other user and allow to the user send meessages
 */

import { Component, Input, Output, EventEmitter} from '@angular/core';

import { Message } from '../../interfaces/message';
import { User } from '../../interfaces/user';
import { UserCrudService } from '../../services/user-crud.service';
import { NotificationHttpService } from '../../services/notification-http.service';

@Component({
  selector: 'alo-chat-message',
  templateUrl: './chat-message.component.html',
  styleUrls: ['./chat-message.component.css'],
  providers: [
    UserCrudService,
    NotificationHttpService
  ]
})
export class ChatMessageComponent {

  @Input() listMessages: Array<Message>;
  @Input() user: User;
  @Output() change: EventEmitter<any>;
  public message: string;
  public userType: string;
  public isErrorLoading: boolean;
  public displaySpinner: boolean;

  constructor(
    private __userCrud: UserCrudService,
    private __notfHttp: NotificationHttpService
  ) {
    this.displaySpinner = false;
    this.isErrorLoading = false;
    this.change = new EventEmitter();
    this.userType = localStorage.getItem('userType');
  }

  /**
   * Send the message to the user
   */
  public sendMessage(): void {
    if (this.message !== '' && this.message !== null) {
      this.displaySpinner = true;
      this.__userCrud.sendMessage(this.message, this.user.id)
        .then(response => {
          this.displaySpinner = false;
          this.message = '';
          // this.__notfHttp.show(response);
          this.change.emit();
        }).catch(error => {
          this.displaySpinner = false;
          this.__notfHttp.show(error);
        });
    }
  }

  /**
   * Refresh the page
   */
  public refresh(): void {
    this.change.emit();
  }

}
