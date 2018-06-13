/**
 * @author Emilio Sánchez Catalán <esc00019@gmail.com>
 * Purpose: Componets that configure the home address
 */
import { Component, Input, Output, EventEmitter, OnInit, OnChanges } from '@angular/core';

import { FormCreateHome } from '../../../interfaces/formCreateHome';
import { BasicTable } from '../../../interfaces/basic-table';

declare var $: any;

@Component({
  selector: 'alo-form-home-address',
  templateUrl: './form-home-address.component.html',
  styleUrls: ['./form-home-address.component.css']
})
export class FormHomeAddressComponent implements OnInit, OnChanges {

  @Input() listCities: Array<BasicTable>;
  @Input() inputData: FormCreateHome;
  @Input() activeResult: boolean;
  @Output() sendInfo: EventEmitter<any>;

  public formData: {
    city: string;
    address: string;
    zip: number;
    nDoor: number;
  };

  constructor() {
    this.sendInfo = new EventEmitter();
    this.formData = {
      city: '',
      address: '',
      zip: null,
      nDoor: null
    };
  }

  ngOnInit() {
    setTimeout( () => {
      $('.selectpicker').selectpicker();
    }, 10);
    if (this.inputData) {
      this.formData.city = this.inputData.city;
      this.formData.address = this.inputData.address;
      this.formData.nDoor = this.inputData.nDoor;
      this.formData.zip = this.inputData.zip;
    }
  }

  ngOnChanges() {
    if (this.activeResult === true) {
      setTimeout( () => {
        this.sendInfo.emit(this.formData);
      });
    }
  }
}
