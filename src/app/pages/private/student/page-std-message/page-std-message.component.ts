/**
 * @author Emilio Sánchez Catalán <esc00019@gmail.com>
 * Purpose: view chat in order to send and recived messages
 */
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { UserCrudService } from '../../../../services/user-crud.service';
import { Message } from '../../../../interfaces/message';
import { User } from '../../../../interfaces/user';

@Component({
  selector: 'page-std-message',
  templateUrl: './page-std-message.component.html',
  styleUrls: ['./page-std-message.component.css'],
  providers: [
    UserCrudService
  ]
})
export class PageStdMessageComponent {

  public listMessages: Array<Message>;
  public userInfo: User;
  public isErrorLoading: boolean;
  public displaySpinner: boolean;
  public users_id: number;

  constructor(
    private __userCrud: UserCrudService,
    private __activeRoute: ActivatedRoute
  ) {
    this.isErrorLoading = false;
    this.displaySpinner = true;
    console.log('entra');
    this.__activeRoute.params.subscribe(params => this.users_id = params['userId'] );
    Promise.all([
      this.__userCrud.getUserInfo(this.users_id),
      this.__userCrud.getUserConversation(this.users_id)
    ]).then(response => {
        this.userInfo = response[0];
        this.listMessages = response[1];
        this.displaySpinner = false;
      }).catch(response => {
        this.isErrorLoading = true;
      });
  }

  /**
   * Get he user messges list
   */
  public getUserMessages(): void {
    this.displaySpinner = true;
    this.__userCrud.getUserConversation(this.users_id)
      .then(response => {
        this.listMessages = response;
        this.displaySpinner = false;
      }).catch(error => {
        this.isErrorLoading = true;
      });
  }
}
