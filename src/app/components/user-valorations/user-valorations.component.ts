/**
 * @author Emilio Sánchez Catalán <esc00019@gmail.com>
 * Purpose: view the list of user's valorations.
 */
import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'alo-user-valorations',
  templateUrl: './user-valorations.component.html',
  styleUrls: ['./user-valorations.component.css']
})
export class UserValorationsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $('.rating').rating('create');
  }

}
