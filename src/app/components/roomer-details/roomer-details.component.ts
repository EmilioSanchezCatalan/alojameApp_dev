/**
 * @author Emilio Sánchez Catalán <esc00019@gmail.com>
 * Purpose: show the actual students thats they are living in the home
 */
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'alo-roomer-details',
  templateUrl: './roomer-details.component.html',
  styleUrls: ['./roomer-details.component.css']
})
export class RoomerDetailsComponent {

  constructor(
    private __router: Router
  ) { }

  /**
   * Navigate to the profile of the user selected
   */
  public gotoProfile(): void {
    switch (localStorage.getItem('userType')) {

      case 'owner':
        this.__router.navigate(['private', 'owner', 'std-profile']);
        break;
      case 'student':
        this.__router.navigate(['private', 'student', 'profile']);
        break;
    }
  }
}
