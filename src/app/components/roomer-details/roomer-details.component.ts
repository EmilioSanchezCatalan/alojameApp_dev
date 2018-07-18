/**
 * @author Emilio Sánchez Catalán <esc00019@gmail.com>
 * Purpose: show the actual students thats they are living in the home
 */
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '../../interfaces/user';

@Component({
  selector: 'alo-roomer-details',
  templateUrl: './roomer-details.component.html',
  styleUrls: ['./roomer-details.component.css']
})
export class RoomerDetailsComponent {

  @Input() listRoomers: Array<User>;

  constructor(
    private __router: Router
  ) { }

  /**
   * Navigate to the profile of the user selected
   * @param {number} users_id id of the user selected
   */
  public gotoProfile(users_id: number): void {
    switch (localStorage.getItem('userType')) {
      case 'owner':
        this.__router.navigate(['private', 'owner', 'std-profile', 'show', users_id]);
        break;
      case 'student':
        this.__router.navigate(['private', 'student', 'profile', 'show', users_id]);
        break;
    }
  }
}
