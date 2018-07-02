/**
 * @author Emilio Sánchez <esc00019@gmail.com>
 * Purpose: Navbar component for navigate for the page without browser flat
 * Inputs:
 *    --> status: set the type of navbar
 *            - public: navbar of section public
 *            - owner: navbar of section owner
 */

import { Component, Input, OnInit} from '@angular/core';
import { MatDialogRef, MatDialog } from '@angular/material';
import { Router,  Event as RouterEvent} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {startWith} from 'rxjs/operators/startWith';
import {map} from 'rxjs/operators/map';
import { FormControl } from '@angular/forms';

import { RegisterComponent } from '../register/register.component';
import { LoginComponent } from '../login/login.component';
import { AuthOwnerService } from '../../services/auth-owner.service';
import { BrowserAddress } from '../../interfaces/browser-address';

@Component({
  selector: 'alo-navbar-simple',
  templateUrl: './navbar-simple.component.html',
  styleUrls: ['./navbar-simple.component.css'],
  providers: [AuthOwnerService]
})
export class NavbarSimpleComponent implements OnInit {

  @Input() status: string;
  @Input() listAddress: BrowserAddress;
  public popupRegister: MatDialogRef<RegisterComponent>;
  public popupLogin: MatDialogRef<LoginComponent>;
  public isInHome: boolean;
  public isInLHome: boolean;
  public myControl: FormControl;
  public filteredOptions: Observable<string[]>;
  public listAddresParsed: Array<string>;

  constructor(
    private __dialog: MatDialog,
    private __router: Router,
    private __authOwn: AuthOwnerService
  ) {
    this.isInHome = false;
    this.isInLHome = false;
    this.status = 'public';
    this.myControl = new FormControl();
    this.listAddresParsed = [];
  }

  ngOnInit() {
    this.__router.events.subscribe( (event: any) => {
      if (event.url) {
        if (this.status === 'public' && (event.url === '/public/index' || event.url === '/') ) {
          this.isInHome = true;
        } else {
          this.isInHome = false;
        }
        if (event.url.includes('/public/homes') || event.url.includes('/private/student/search-homes')) {
          this.isInLHome = true;
        } else {
          this.isInLHome = false;
        }
      }
    });
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
   * Open a popup of Register
   */
  public openRegister(): void {
    this.popupRegister = this.__dialog.open(RegisterComponent);
    this.popupRegister.afterClosed().subscribe(
      response => {
        if (response === 'login') {
          this.openLogin();
        }
      }
    );
  }

  /**
   * Open a popup of Login
   */
  public openLogin(): void {
    this.popupLogin = this.__dialog.open(LoginComponent);
    this.popupLogin.afterClosed().subscribe(
      response => {
        if (response === 'register') {
          this.openRegister();
        }
      }
    );
  }

  /**
   * Logout the user Owner
   */
  public logoutOwner(): void {
    this.__authOwn.logout();
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
    if (localStorage.getItem('userType') === 'public') {
      this.__router.navigate(['/public', 'homes'], {queryParams: queryParams});
    } else {
      this.__router.navigate(['/private', 'student', 'search-homes'], {queryParams: queryParams});
    }
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
