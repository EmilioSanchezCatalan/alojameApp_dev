/**
 * @author Emilio Sánchez Catalán <esc00019@gmail.com>
 * Purpose: Componets that configure the home address
 */
import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'alo-form-home-address',
  templateUrl: './form-home-address.component.html',
  styleUrls: ['./form-home-address.component.css']
})
export class FormHomeAddressComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $('.selectpicker').selectpicker();
  }
}
