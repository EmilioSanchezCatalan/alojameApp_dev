/**
 * @author Emilio Sánchez Catalán <esc00019@gmail.com>
 * Purpose: view the list of homes subscribed by the student
 */
import { Component } from '@angular/core';

import { HomeCrudService } from '../../../../services/home-crud.service';
import { NotificationHttpService } from '../../../../services/notification-http.service';

import { ItemHome } from '../../../../interfaces/homes';

@Component({
  selector: 'page-subs-homes',
  templateUrl: './page-subs-homes.component.html',
  styleUrls: ['./page-subs-homes.component.css'],
  providers: [
    HomeCrudService,
    NotificationHttpService
  ]
})
export class PageSubsHomesComponent {

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
   * Get all the list of home subscribed by the student
   */
  public getListOfHomes(): void {
    this.displaySpinner = true;
    this.__homeCrud.getHomeSubscribed()
      .then( response => {
        this.displaySpinner = false;
        this.listHomes = response;
      }).catch( () => {
        this.isErrorLoading = true;
      });
  }

}
