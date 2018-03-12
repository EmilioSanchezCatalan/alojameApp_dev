import { Component } from '@angular/core';
import { MouseEvent } from '@agm/core';

declare var $: any;

@Component({
  selector: 'app-page-lhomes',
  templateUrl: './page-lhomes.component.html',
  styleUrls: ['./page-lhomes.component.css']
})
export class PageLhomesComponent {

  public isFilterShowed: boolean;

  constructor() {
    this.isFilterShowed = false;
  }

  /**
   * Change the display state of the filter section
   */
  public showFilterSection(): void {
    this.isFilterShowed = this.isFilterShowed === true ? false : true;
    setTimeout( () => {
      $('.selectpicker').selectpicker();
    }, 25);
  }
}
