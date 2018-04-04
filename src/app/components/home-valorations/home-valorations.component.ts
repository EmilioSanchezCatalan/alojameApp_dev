/**
 * @author Emilio Sánchez Catalán <esc00019@gmail.com>
 * Purpose: view the list of home's valorations.
 */
import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'alo-home-valorations',
  templateUrl: './home-valorations.component.html',
  styleUrls: ['./home-valorations.component.css']
})
export class HomeValorationsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $('.rating').rating('create');
  }

}
