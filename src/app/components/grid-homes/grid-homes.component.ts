/**
 * @author Emilio Sánchez <esc00019@gmail.com>
 * Purpose: define a grid responsive for the list of homes
 */
import { Component, OnInit} from '@angular/core';

declare var $: any;

@Component({
  selector: 'alo-grid-homes',
  templateUrl: './grid-homes.component.html',
  styleUrls: ['./grid-homes.component.css']
})
export class GridHomesComponent implements  OnInit {

  constructor() { }

  ngOnInit() {
    $('.rating').rating('create');
  }
}
