/**
 * @author Emilio Sánchez Catalán <esc00019@gmail.com>
 * Purpose: component for create the ad configuration
 */

 import { Component, Input, Output, EventEmitter, OnInit, OnChanges } from '@angular/core';

import { FormCreateHome } from '../../../interfaces/formCreateHome';
import { BasicTable } from '../../../interfaces/basic-table';

@Component({
  selector: 'alo-form-home-ad',
  templateUrl: './form-home-ad.component.html',
  styleUrls: ['./form-home-ad.component.css']
})
export class FormHomeAdComponent implements OnInit, OnChanges {

  @Input() homeBills: Array<BasicTable>;
  @Input() inputData: FormCreateHome;
  @Input() activeResult: boolean;
  @Output() sendInfo: EventEmitter<any>;

  public formData: {
    title: string,
    price: number,
    bill: Array<{
      id: number;
      isChecked: boolean;
    }>,
    minStance: number,
    fiance: number,
    avalibleDate: string;
  };

  constructor() {
    this.sendInfo = new EventEmitter();
    this.formData = {
      title: '',
      price: null,
      bill: [],
      minStance: null,
      fiance: null,
      avalibleDate: ''
    };
  }

  ngOnInit() {
    for ( let i = 0; i < this.homeBills.length; i++) {
      this.formData.bill.push({
        id: this.homeBills[i].id,
        isChecked: false
      });
    }
    if (this.inputData) {
      this.formData.title = this.inputData.title;
      this.formData.price = this.inputData.price;
      this.formData.minStance = this.inputData.minStance;
      this.formData.fiance = this.inputData.fiance;
      this.formData.avalibleDate = this.inputData.avalibleDate;
      if (this.inputData.bill) {
        this.formData.bill = this.inputData.bill.slice();
      }
    }
  }

  ngOnChanges() {
    if (this.activeResult === true) {
      setTimeout( () => {
        this.sendInfo.emit(this.formData);
      });
    }
  }

  /**
   * Change the  status of the service on the formData recolect
   * @param {number} pos postion of the service on the array
   */
  public changeCheckBoxStatus(pos: number): void {
    this.formData.bill[pos].isChecked = this.formData.bill[pos].isChecked === true ? false : true;
  }
}
