/**
 * @author Emilio Sánchez <esc00019@gmail.com>
 * Purpose: Show a home specifications in a card format
 * Inputs:
 *    --> function: defined the CardHomes's functionality
 *              - none: no functionality
 *              - crud: functionality crud
 *              - subs: functionality of subscription
 */
import { Component, OnInit, Input, HostListener } from '@angular/core';
import { Router } from '@angular/router';

declare var $: any;

@Component({
  selector: 'alo-card-home',
  templateUrl: './card-home.component.html',
  styleUrls: ['./card-home.component.css']
})
export class CardHomeComponent implements OnInit {

  @Input() function: string;

  constructor(
    private __router: Router
  ) {
    this.function = 'none';
  }

  ngOnInit() {
    $('.rating').rating('create');
  }

  public gotoHome(): void {
    if (this.function === 'none') {

      switch (localStorage.getItem('userType')) {

        case 'student':
          this.__router.navigate(['private/student', 'home']);
          break;
        case 'public':
          this.__router.navigate(['public', 'home']);
          break;
        case 'owner':
          this.__router.navigate(['public', 'home']);
          break;
      }
    }
  }

  /**
   * Navigate to the view home-detail of the home selected
   */
  public gotoShowHome(): void {
    if (this.function === 'crud') {
      this.__router.navigate(['private/owner', 'own-home', 'show']);
    } else {
      this.__router.navigate(['private/student', 'std-home']);
    }
  }

  /**
   * Navigate to the view students for make the control of the roomers
   */
  public gotoStudentsHome(): void {
    this.__router.navigate(['private/owner', 'own-home', 'students']);
  }

  /**
   * Navigate to the view edit home configuration
   */
  public gotoEditHome(): void {
    this.__router.navigate(['private/owner', 'own-home', 'edit']);
  }

}
