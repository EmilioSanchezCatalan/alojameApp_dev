/**
 * @author Emilio Sánchez Catalán <esc00019@gmail.com>
 * Purpose: Page where the can show and search the different
 * list of homes.
 */
import { Component } from '@angular/core';
import { MouseEvent } from '@agm/core';
import { ZERO_FILTER } from '../../../const/filter-browser.const';
import { FilterBrowser } from '../../../interfaces/filter-browser';
declare var $: any;

@Component({
  selector: 'page-lhomes',
  templateUrl: './page-lhomes.component.html',
  styleUrls: ['./page-lhomes.component.css']
})
export class PageLhomesComponent {

  public filterState: FilterBrowser;
  public filterTemp: FilterBrowser;
  public isFilterShowed: boolean;

  constructor() {
    this.isFilterShowed = false;
    this.filterState = JSON.parse(JSON.stringify(ZERO_FILTER));
  }

  /**
   * Change the display state of the filter section
   */
  public showFilterSection(): void {
    this.isFilterShowed = this.isFilterShowed === true ? false : true;
    setTimeout( () => {
      // TODO ISSUE 0000003 effecto de expansión de los selectores
      $('.selectpicker').selectpicker();
    }, 25);
  }

  /**
   * TODO Cuando tengamos mas la Api ya que en este caso se aligerará.
   */
  // public applyFilters(): void {
  //   console.log('hola');
  // }
}
