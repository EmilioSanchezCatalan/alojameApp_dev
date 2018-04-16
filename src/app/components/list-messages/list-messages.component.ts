/**
 * @author Emilio Sánchez Catalán <esc00019@gmail.com>
 * Purpose: show the list of messages recived
 */

import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'alo-list-messages',
  templateUrl: './list-messages.component.html',
  styleUrls: ['./list-messages.component.css']
})
export class ListMessagesComponent {

  constructor(
    private __router: Router
  ) { }

  /**
   * Go into a chat conversation with a User
   */
  public gotoMessage(): void {
    if (localStorage.getItem('userType') === 'owner') {
      this.__router.navigate(['private/owner', 'own-message']);
    } else if (localStorage.getItem('userType') === 'student') {
      this.__router.navigate(['private/student', 'std-message']);
    }
  }
}
