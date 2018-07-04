/**
 * @author Emilio Sánchez Catalán
 * Purpose: form with feature student information
 */
import { Component, OnChanges, Input, Output, EventEmitter } from '@angular/core';

import { User } from '../../interfaces/user';
import { BasicTable } from '../../interfaces/basic-table';

@Component({
  selector: 'alo-form-feature',
  templateUrl: './form-feature.component.html',
  styleUrls: ['./form-feature.component.css']
})
export class FormFeatureComponent implements OnChanges {

  @Input() inputData: User;
  @Input() activeResult: boolean;
  @Output() sendInfo: EventEmitter<any>;

  constructor() {
    this.sendInfo = new EventEmitter();
  }

  ngOnChanges() {
    if (this.activeResult === true) {
      setTimeout(() => {
        this.sendInfo.emit(this.inputData);
      });
    }
  }

}
