/**
 * @author Emilio Sánchez <esc00019@gmail.com>
 * Purpose: Show a home specifications in a card format
 */
import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'alo-card-home',
  templateUrl: './card-home.component.html',
  styleUrls: ['./card-home.component.css']
})
export class CardHomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $('.rating').rating('create');
  }

}
