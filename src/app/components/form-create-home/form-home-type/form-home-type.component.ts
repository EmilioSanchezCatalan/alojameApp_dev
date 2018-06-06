/**
 * @author Emilio Sánchez Catalán <esc00019@gmail.com>
 * Purpose: configure the type of home
 */
import { Component, OnInit, OnDestroy, Input, Output, EventEmitter } from '@angular/core';

import { FormCreateHome } from '../../../interfaces/formCreateHome';

@Component({
  selector: 'alo-form-home-type',
  templateUrl: './form-home-type.component.html',
  styleUrls: ['./form-home-type.component.css']
})
export class FormHomeTypeComponent implements OnInit, OnDestroy {

  @Input() inputData: FormCreateHome;
  @Output() sendInfo: EventEmitter<any>;

  public formData: any;

  constructor() {
    this.formData = {
      homeType: '',
      area: '',
      rentType: '',
      nRoomers: ''
    };
    this.sendInfo = new EventEmitter();
  }

  ngOnInit() {
    if (this.inputData) {
      this.formData.homeType = this.inputData.homeType;
      this.formData.area = this.inputData.area;
      this.formData.rentType = this.inputData.rentType;
      this.formData.nRoomers = this.inputData.nRoomers;
    }
  }

  ngOnDestroy() {
    this.sendInfo.emit(this.formData);
  }
}
