/**
 * @author Emilio Sánchez Catalán <esc00019@gmail.com>
 * Purpose: view the profile of a student
 */
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '../../interfaces/user';

@Component({
  selector: 'alo-user-basic-info',
  templateUrl: './user-basic-info.component.html',
  styleUrls: ['./user-basic-info.component.css']
})
export class UserBasicInfoComponent {

  @Input() function: string;
  @Input() user: User;

  constructor(
    private __router: Router
  ) {
    this.function = 'none';
  }

  /**
   * Go to the page edit profile
   */
  public gotoEditProfile(): void {
    if (localStorage.getItem('userType') === 'student') {
      this.__router.navigate(['private', 'student', 'std-profile', 'configuration']);
    } else if (localStorage.getItem('userType') === 'owner') {
      this.__router.navigate(['private', 'owner', 'own-profile', 'configuration']);
    }
  }

  /**
   * Open a chat with the user
   * @param {number} users_id id of the user selected
   */
  public gotoChatUser(users_id: number): void {
    if (localStorage.getItem('userType') === 'student') {
      this.__router.navigate(['private', 'student', 'std-message', users_id]);
    } else if (localStorage.getItem('userType') === 'owner') {
      this.__router.navigate(['private', 'owner', 'own-message', users_id]);
    }
  }
}
