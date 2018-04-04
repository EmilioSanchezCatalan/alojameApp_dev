/**
 * @author Emilio Sánchez <esc00019@gmail.com>
 * Purpose: Show a home specifications in a card format
 * Inputs:
 *    --> function: defined the CardHomes's functionality
 *              - none: no functionality
 *              - crud: functionality crud
 */
import { Component, OnInit, Input } from '@angular/core';

declare var $: any;

@Component({
  selector: 'alo-card-home',
  templateUrl: './card-home.component.html',
  styleUrls: ['./card-home.component.css']
})
export class CardHomeComponent implements OnInit {

  @Input() function: string;

  constructor() {
    this.function = 'none';
  }

  ngOnInit() {
    $('.rating').rating('create');
  }

}
