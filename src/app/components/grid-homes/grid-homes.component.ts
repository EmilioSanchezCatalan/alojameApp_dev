/**
 * @author Emilio Sánchez <esc00019@gmail.com>
 * Purpose: define a grid responsive for the list of homes
 * Inputs:
 *    --> function: defined the CardHomes's functionality of the GridHome
 *              - none: no functionality
 *              - crud: functionality crud
 *              - subs: functionality subscribed homes
 *    --> homes: list of homes thats are going to show
 */
import { Component, OnInit, Input} from '@angular/core';
import { Router } from '@angular/router';

import { ItemHome } from '../../interfaces/homes';

declare var $: any;

@Component({
  selector: 'alo-grid-homes',
  templateUrl: './grid-homes.component.html',
  styleUrls: ['./grid-homes.component.css']
})
export class GridHomesComponent implements  OnInit {

  @Input() function: string;
  @Input() homes: Array<ItemHome>;

  constructor(
    private __router: Router
  ) {
    this.function = 'none';
  }

  ngOnInit() {
    $('.rating').rating('create');
  }

  /**
   * Navigate to the page create home
   */
  public gotoCreateHome(): void {
    this.__router.navigate(['/private', 'owner', 'own-home', 'create']);
  }
}
