/**
 * @author Emilio Sánchez <esc00019@gmail.com>
 * Purpose: Show a home specifications in a card format
 * Inputs:
 *    --> function: defined the CardHomes's functionality
 *              - none: no functionality
 *              - crud: functionality crud
 */
import { Component, OnInit, Input } from '@angular/core';
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

  /**
   * Navigate to the view home-detail of the home selected
   */
  public gotoShowHome(): void {
    this.__router.navigate(['private', 'own-home', 'show']);
  }

}
