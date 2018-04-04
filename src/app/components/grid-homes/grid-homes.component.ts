/**
 * @author Emilio Sánchez <esc00019@gmail.com>
 * Purpose: define a grid responsive for the list of homes
 * Inputs:
 *    --> function: defined the CardHomes's functionality of the GridHome
 *              - none: no functionality
 *              - crud: functionality crud
 */
import { Component, OnInit, Input} from '@angular/core';

declare var $: any;

@Component({
  selector: 'alo-grid-homes',
  templateUrl: './grid-homes.component.html',
  styleUrls: ['./grid-homes.component.css']
})
export class GridHomesComponent implements  OnInit {

  @Input() function: string;
  constructor() {
    this.function = 'none';
  }

  ngOnInit() {
    $('.rating').rating('create');
  }
}
