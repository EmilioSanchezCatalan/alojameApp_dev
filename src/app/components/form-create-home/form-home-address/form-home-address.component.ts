/**
 * @author Emilio Sánchez Catalán <esc00019@gmail.com>
 * Purpose: Componets that configure the home address
 */
import { Component, Input, Output, EventEmitter, OnInit, OnChanges, AfterContentInit } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {startWith} from 'rxjs/operators/startWith';
import {map} from 'rxjs/operators/map';
import { FormControl } from '@angular/forms';

import { FormCreateHome } from '../../../interfaces/formCreateHome';
import { BasicTable } from '../../../interfaces/basic-table';

declare var $: any;

@Component({
  selector: 'alo-form-home-address',
  templateUrl: './form-home-address.component.html',
  styleUrls: ['./form-home-address.component.css']
})
export class FormHomeAddressComponent implements OnInit, OnChanges, AfterContentInit {

  @Input() listCities: Array<BasicTable>;
  @Input() addressSuggest: Array<{ address: string }>;
  @Input() inputData: FormCreateHome;
  @Input() activeResult: boolean;
  @Output() sendInfo: EventEmitter<any>;
  options = [
    'One',
    'Two',
    'Three'
  ];
  public filteredOptions: Observable<string[]>;
  public addressArray: Array<string>;
  public myControl: FormControl;
  public formData: {
    city: number;
    address: string;
    zip: number;
    nDoor: string;
    nHome: number;
    nFloor: number;
  };

  constructor() {
    this.myControl = new FormControl();
    this.sendInfo = new EventEmitter();
    this.formData = {
      city: null,
      address: '',
      zip: null,
      nDoor: '',
      nHome: null,
      nFloor: null
    };
    this.addressArray = [];
  }

  ngOnInit() {
    if (this.inputData) {
      this.formData.city = this.inputData.city;
      this.formData.address = this.inputData.address;
      this.formData.nDoor = this.inputData.nDoor;
      this.formData.zip = this.inputData.zip;
      this.formData.nHome = this.inputData.nHome,
      this.formData.nFloor = this.inputData.nFloor;
    }
    this._addressToArray();
    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(val => this.filter(val))
      );
  }

  ngOnChanges() {
    if (this.activeResult === true) {
      setTimeout( () => {
        this.sendInfo.emit(this.formData);
      });
    }
  }

  ngAfterContentInit() {
    setTimeout(() => {
      $('.selectpicker').selectpicker();
    });
  }

  /**
   * Change the format of address list into an array
   */
  private _addressToArray(): void {
    this.addressSuggest.forEach(element => {
      this.addressArray.push(element.address);
    });

  }

  /**
   * Filter the address with the val included
   * @param  {string} val val to compare with the list of addressSuggest
   * @return {Array<string>} an array of string with the list avalible
   */
  public filter(val: string): string[] {
    return this.addressArray.filter(option =>
      option.toLowerCase().includes(val.toLowerCase()));
  }
}
