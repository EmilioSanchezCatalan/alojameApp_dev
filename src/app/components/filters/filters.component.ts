/**
 * @author Emilio Sánchez Catalán <esc00019@gmail.com>
 * Purpose: filters dedicated in the list of homes showed
 * Inputs:
 *    --> hasMoreFilters: indicate if the button have been activate.
 * Outputs:
 *    --> moreFilters: indicate that is button 'mas filtros' was been clicked
 */
import { Component, OnChanges, Output, EventEmitter, Input} from '@angular/core';

import { BasicTable } from '../../interfaces/basic-table';
import { FilterBrowser } from '../../interfaces/filter-browser';

@Component({
  selector: 'alo-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnChanges {

  @Output() moreFilters: EventEmitter<any>;
  @Output() outSetFilters: EventEmitter<any>;
  @Input() applyMoreFilters: boolean;
  @Input() listHomesTypes: Array<BasicTable>;
  @Input() filters: FilterBrowser;
  public filterCopy: FilterBrowser;

  constructor() {
    this.moreFilters = new EventEmitter();
    this.outSetFilters = new EventEmitter();
    this.applyMoreFilters = false;
  }

  ngOnChanges() {
    this.filterCopy = JSON.parse(JSON.stringify(this.filters));
    console.log(this.filterCopy);
  }

  /**
   * No change any filter
   */
  public noneChange(): void {
    this.filterCopy = JSON.parse(JSON.stringify(this.filters));
  }

  /**
   * Apply the change of filters
   */
  public applyChages(): void {
    this.outSetFilters.emit(this.filterCopy);
  }

  /**
   * Restart the type rent filter
   */
  public restartDate(): void {
    this.filterCopy.date_in = '';
    this.outSetFilters.emit(this.filterCopy);
  }

  /**
   * Restart the type rent filter
   */
  public restartPrice(): void {
    this.filterCopy.price_min = null;
    this.filterCopy.price_max = null;
    this.outSetFilters.emit(this.filterCopy);
  }

  /**
   * Restart the type rent filter
   */
  public restartTypeRent(): void {
    this.filterCopy.type_rent = [];
    console.log(this.filterCopy);
    this.outSetFilters.emit(this.filterCopy);
  }

  /**
   * Restart the type rent filter
   */
  public restartTypeHome(): void {
    this.filterCopy.type_accomodation = [];
    this.outSetFilters.emit(this.filterCopy);
  }

  /**
   * Emmit a event witch indicate a advice for show the rest
   * of filters.
   */
  public setEventMoreFilters(): void {
    this.moreFilters.emit();
  }

  /**
   * Build a aux filter for create a home type filter when the form is been submited
   * @param  event event object of the matcheckbox
   */
  public getHomeTypes(event: any): void {
    if (event.checked) {
      this.filterCopy.type_accomodation.push(event.source.value);
    } else {
      this.filterCopy.type_accomodation.splice(this.filterCopy.type_accomodation.indexOf(event.source.value), 1);
    }
  }

  /**
   * Build a aux filter for create a rent type filter when the form is been submited
   * @param  event event object of the matcheckbox
   */
  public getHomeRent(event: any): void {
    if (event.checked) {
      this.filterCopy.type_rent.push(event.source.value);
    } else {
      this.filterCopy.type_rent.splice(this.filterCopy.type_rent.indexOf(event.source.value), 1);
    }
  }
}
