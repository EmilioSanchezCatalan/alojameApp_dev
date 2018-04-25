/**
 * @author Emilio Sánchez Catalán <esc00019@gmail.com>
 * Purpose: view the profile of a student
 */
import { Component, Input } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'alo-user-basic-info',
  templateUrl: './user-basic-info.component.html',
  styleUrls: ['./user-basic-info.component.css']
})
export class UserBasicInfoComponent {

  @Input() function: string;
  constructor(
    private __router: Router
  ) {
    this.function = 'none';
  }

  /**
   * Go to the page edit profile
   */
  public gotoEditProfile(): void {
    this.__router.navigate(['private', 'student', 'std-profile', 'configuration']);
  }
}
