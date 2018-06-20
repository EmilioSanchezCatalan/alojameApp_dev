/**
 * @author Emilio Sánchez Catalán <esc00019@gmail.com>
 * Purpose: show all the home of the owner and allow him to create, edit, delete, etc.
 */
import { Component, OnInit } from '@angular/core';

import { HomeCrudService } from '../../../../services/home-crud.service';
import { NotificationHttpService } from '../../../../services/notification-http.service';

import { ItemHome } from '../../../../interfaces/homes';

@Component({
  selector: 'page-own-homes',
  templateUrl: './page-own-homes.component.html',
  styleUrls: ['./page-own-homes.component.css'],
  providers: [
    HomeCrudService,
    NotificationHttpService
  ]
})
export class PageOwnHomesComponent {

  public listHomes: Array<ItemHome>;
  public isErrorLoading: boolean;
  public displaySpinner: boolean;

  constructor(
    private __homeCrud: HomeCrudService,
    private __notfHttp: NotificationHttpService
  ) {
    this.displaySpinner = false;
    this.isErrorLoading = false;
    this.getListOfHomes();
  }

  /**
   * Get all the list of home of the owner and show it
   */
  public getListOfHomes(): void {
    this.displaySpinner = true;
    this.__homeCrud.getListHomes()
      .then( response => {
        this.displaySpinner = false;
        this.listHomes = response;
      }).catch( () => {
        this.displaySpinner = false;
        this.isErrorLoading = true;
      });
  }
}
