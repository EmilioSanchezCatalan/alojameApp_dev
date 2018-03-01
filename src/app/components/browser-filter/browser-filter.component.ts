/**
 * @author Emilio Sánchez <esc00019@gmail.com>
 * Purpose: Browser for shearch accommodation with some basics filters
 */

import { Component } from '@angular/core';

@Component({
  selector: 'alo-browser-filter',
  templateUrl: './browser-filter.component.html',
  styleUrls: ['./browser-filter.component.css']
})
export class BrowserFilterComponent {

  public isFilterBrowserVisible: boolean;

  constructor() {
    this.isFilterBrowserVisible = false;
  }

  /**
   * Set the visisble status to the browser
   * @param {boolean} status state of the visibility of the browser's filters
   */
  public setFilterBrowserStatus(status: boolean): void {
    this.isFilterBrowserVisible = status;
  }
}
