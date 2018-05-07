/**
 * @author Emilio Sánchez Catalán <esc00019@gmail>
 * Purpose: form with owner information for upload a home
 */
import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'alo-form-owner-info',
  templateUrl: './form-owner-info.component.html',
  styleUrls: ['./form-owner-info.component.css']
})
export class FormOwnerInfoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $('.selectpicker').selectpicker();
  }
}
