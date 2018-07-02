/**
 * @author Emilio Sánchez Catalán <esc00019@gmail.com>
 * Purpose: Page where the can show and search the different
 * list of homes.
 */
import { Component, OnInit, OnChanges} from '@angular/core';
import { Router, Event as RouterEvent, ActivatedRoute, NavigationEnd} from '@angular/router';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

// import { MouseEvent } from '@agm/core';
import { ZERO_FILTER } from '../../../const/filter-browser.const';
import { FilterBrowser } from '../../../interfaces/filter-browser';
import { PublicDataService } from '../../../services/public-data.service';
import { HomePublicService } from '../../../services/home-public.service';
import { BasicTable } from '../../../interfaces/basic-table';
import { ItemHome } from '../../../interfaces/homes';

declare var $: any;

@Component({
  selector: 'page-lhomes',
  templateUrl: './page-lhomes.component.html',
  styleUrls: ['./page-lhomes.component.css'],
  providers: [
    HomePublicService,
    PublicDataService
  ]
})
export class PageLhomesComponent {

  // Control state
  public displaySpinner: boolean;
  public isErrorLoading: boolean;
  public isFilterShowed: boolean;
  public fitlerApply: boolean;

  // Data to search
  public filterState: FilterBrowser;
  public address: string;
  public city: string;

  // Aux Data
  public servicesAux: Array<string>;
  public homeTypeAux: Array<string>;
  public homeRentAux: Array<string>;

  // data recv
  public listServices: Array<BasicTable>;
  public listHomesTypes: Array<BasicTable>;
  public listHomesItems: Array<ItemHome>;

  constructor(
    private __router: Router,
    private __activeRoute: ActivatedRoute,
    private __publicData: PublicDataService,
    private __homePublic: HomePublicService,
    private __fb: FormBuilder
  ) {
    this.displaySpinner = true;
    this.isErrorLoading = false;
    this.isFilterShowed = false;
    this.fitlerApply = false;
    this.filterState = JSON.parse(JSON.stringify(ZERO_FILTER));
    this.homeRentAux = [];
    this.homeTypeAux = [];
    this.servicesAux = [];

    Promise.all([
      this.__publicData.getListHomeServices(),
      this.__publicData.getListHomeTypes(),
    ]).then(response => {
      this.displaySpinner = false;
      this.listServices = response[0];
      this.listHomesTypes = response[1];
    }).catch(error => {
      this.isErrorLoading = true;
    });
    __router.events.subscribe((event: RouterEvent) => {
      this.getHomesQueryParams(event);
    });
  }

  public getHomesQueryParams(event: RouterEvent) {
    if (event instanceof NavigationEnd) {
      this.__activeRoute.queryParams.subscribe(response => {
        this.address = response['address'];
        this.city = response['city'];
        this.displaySpinner = true;

        this.__homePublic.getListHomesItems(this.address, this.city, this.filterState)
          .then(response2 => {
            this.displaySpinner = false;
            this.listHomesItems = response2;
          }).catch(error => {
            this.isErrorLoading = true;
          });

      });
    }
  }

  /**
   * Change the display state of the filter section
   */
  public showFilterSection(): void {
    this.isFilterShowed = this.isFilterShowed === true ? false : true;
    this.homeRentAux = this.filterState.type_rent.slice();
    this.homeTypeAux = this.filterState.type_accomodation.slice();
    this.servicesAux = this.filterState.services.slice();
    setTimeout( () => {
      // TODO ISSUE 0000003 effecto de expansión de los selectores
      $('.selectpicker').selectpicker();
    }, 25);
  }

  /**
   * Execute the filters maked by the form filter
   * @param  formFilter form with the filters to apply into the search
   */
  public setFilter(formFilter: FormGroup): void {
    this.fitlerApply = true;
    this.isFilterShowed = false;
    this.filterState.number_kitchen = formFilter.controls['nKitchen'].value;
    this.filterState.number_bathrooms = formFilter.controls['nBath'].value;
    this.filterState.number_bedthrooms = formFilter.controls['nRooms'].value;
    this.filterState.number_livingrooms = formFilter.controls['nLiving'].value;
    this.filterState.price_max = formFilter.controls['priceMax'].value;
    this.filterState.price_min = formFilter.controls['priceMin'].value;
    this.filterState.pets = formFilter.controls['pet'].value;
    this.filterState.smoke = formFilter.controls['smoke'].value;
    this.filterState.services = this.servicesAux.slice();
    this.filterState.type_rent = this.homeRentAux.slice();
    this.filterState.type_accomodation = this.homeTypeAux.slice();
    this.displaySpinner = true;
    this.__homePublic.getListHomesItems(this.address, this.city, this.filterState)
      .then(response => {
        this.displaySpinner = false;
        this.listHomesItems = response;
      }).catch(error => {
        this.isErrorLoading = true;
      });
  }

  /**
   * Build a aux filter for create a service filter when the form is been submited
   * @param  event event object of the matcheckbox
   */
  public getHomeServices(event: any): void {
    if (event.checked) {
      this.servicesAux.push(event.source.value);
    } else {
      this.servicesAux.splice(this.servicesAux.indexOf(event.source.value), 1);
    }
  }

  /**
   * Build a aux filter for create a home type filter when the form is been submited
   * @param  event event object of the matcheckbox
   */
  public getHomeTypes(event: any): void {
    if (event.checked) {
      this.homeTypeAux.push(event.source.value);
    } else {
      this.homeTypeAux.splice(this.homeTypeAux.indexOf(event.source.value), 1);
    }
  }

  /**
   * Build a aux filter for create a rent type filter when the form is been submited
   * @param  event event object of the matcheckbox
   */
  public getHomeRent(event: any): void {
    if (event.checked) {
      this.homeRentAux.push(event.source.value);
    } else {
      this.homeRentAux.splice(this.homeRentAux.indexOf(event.source.value), 1);
    }
  }

  /**
   * [getBarFilters description]
   * @param event [description]
   */
  public getBarFilters(event: any): void {
    this.filterState = JSON.parse(JSON.stringify(event));
    this.displaySpinner = true;
    this.__homePublic.getListHomesItems(this.address, this.city, this.filterState)
      .then(response => {
        this.displaySpinner = false;
        this.listHomesItems = response;
      }).catch(error => {
        this.isErrorLoading = true;
      });
  }

  /**
   * Reset all the filters on the search
   */
  public resetAllFilters(): void {
    this.fitlerApply = false;
    this.isFilterShowed = false;
    this.filterState = JSON.parse(JSON.stringify(ZERO_FILTER));
    this.displaySpinner = true;
    this.__homePublic.getListHomesItems(this.address, this.city, this.filterState)
      .then(response => {
        this.displaySpinner = false;
        this.listHomesItems = response;
      }).catch(error => {
        this.isErrorLoading = true;
      });
  }

  /**
   * TODO Cuando tengamos mas la Api ya que en este caso se aligerará.
   */
  // public applyFilters(): void {
  //   console.log('hola');
  // }
}
