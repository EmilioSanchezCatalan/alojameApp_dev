/**
 * @author Emilio Sánchez Catalán <esc00019@gmail>
 * Purpose: form with owner information for upload a home
 */
import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'alo-form-std-info',
  templateUrl: './form-std-info.component.html',
  styleUrls: ['./form-std-info.component.css']
})
export class FormStdInfoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $('.selectpicker').selectpicker();
  }
}
