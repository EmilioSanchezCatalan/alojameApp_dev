/**
 * @author Emilio Sánchez <esc00019@gmail.com>
 * Purpose: Browser for shearch accommodation with some basics filters
 */

import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {startWith} from 'rxjs/operators/startWith';
import {map} from 'rxjs/operators/map';
import { FormControl } from '@angular/forms';

import { BrowserAddress } from '../../interfaces/browser-address';

@Component({
  selector: 'alo-browser-filter',
  templateUrl: './browser-filter.component.html',
  styleUrls: ['./browser-filter.component.css']
})
export class BrowserFilterComponent implements OnInit {

  @Input() listAddress: BrowserAddress;
  public filteredOptions: Observable<string[]>;
  public myControl: FormControl;
  public listAddresParsed: Array<string>;

  constructor(
    private __router: Router,
  ) {
    this.myControl = new FormControl();
    this.listAddresParsed = [];
  }

  ngOnInit() {
    if (this.listAddress) {
      this.parseFilterToArray();
      this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(val => this.filter(val))
      );
    }
  }

  /**
   * Parse the list of address for make an Array
   */
  public parseFilterToArray(): void {
    this.listAddress.list_address.forEach(element => {
      this.listAddresParsed.push(element.address + ', ' + element.City.name);
    });
    this.listAddress.list_cities.forEach(element => {
      this.listAddresParsed.push(element.City.name);
    });
  }

  /**
   * Filter the address with the val included
   * @param  {string} val val to compare with the list of addressSuggest
   * @return {Array<string>} an array of string with the list avalible
   */
  public filter(val: string): string[] {
    return this.listAddresParsed.filter(option =>
      option.toLowerCase().includes(val.toLowerCase()));
  }


  /**
   * Navigate to the list of homes with the filters of address and city
   * @param {string} value   value of the option select to navigate
   */
  public navigateToSearch(value: string): void {
    let queryParams = this.parseAddressToQuery(value);
    this.__router.navigate(['/public', 'homes'], {queryParams: queryParams});
  }

  /**
   * Parse the selection value to queryParams format
   * @param  {string} value selection of the search filter
   * @return {Object}       the queryParams with the correct format
   */
  public parseAddressToQuery(value: string): {city: number, address: string; } {
    if (value.includes(',')) {
      let address_full = value.split(', ');
      return  { city: this.searchCityCode(address_full[1]), address: address_full[0] };
    } else {
      return { city: this.searchCityCode(value), address: null };
    }
  }

  /**
   * Searh into the list of cities the name of the city selected
   * @param  {string} nameCity name of the city witch we are goint to search
   * @return {number}          id of the city selected
   */
  public searchCityCode(nameCity: string): number {
    let cities_id;
    this.listAddress.list_cities.forEach(element => {
      if (element.City.name === nameCity) {
        cities_id = element.cities_id;
      }
    });
    return cities_id;
  }
}
