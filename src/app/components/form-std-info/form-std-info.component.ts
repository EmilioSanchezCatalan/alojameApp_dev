/**
 * @author Emilio Sánchez Catalán <esc00019@gmail>
 * Purpose: form with owner information for upload a home
 */
import { Component, OnInit, OnChanges, Input, Output, EventEmitter } from '@angular/core';

import { User } from '../../interfaces/user';
import { BasicTable } from '../../interfaces/basic-table';

declare var $: any;

@Component({
  selector: 'alo-form-std-info',
  templateUrl: './form-std-info.component.html',
  styleUrls: ['./form-std-info.component.css']
})
export class FormStdInfoComponent implements OnInit, OnChanges {

  @Input() inputData: User;
  @Input() cities: Array<BasicTable>;
  @Input() activeResult: boolean;
  @Output() sendInfo: EventEmitter<any>;

  constructor() {
    this.sendInfo = new EventEmitter();
  }

  ngOnInit() {
    $('.selectpicker').selectpicker();
  }

  ngOnChanges() {
    if (this.activeResult === true) {
      setTimeout(() => {
        this.sendInfo.emit(this.inputData);
      });
    }
  }
}
