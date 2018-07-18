/**
 * @author Emilio Sánchez Catalán <esc00019@gmail.com>
 * Purpose: show the view detail of a home in order to make a subscription
 */
import { Component } from '@angular/core';

import { HomeCrudService } from '../../../../services/home-crud.service';
import { NotificationHttpService } from '../../../../services/notification-http.service';
import { HomesFull } from '../../../../interfaces/homes';
import { User } from '../../../../interfaces/user';

@Component({
  selector: 'page-my-home',
  templateUrl: './page-my-home.component.html',
  styleUrls: ['./page-my-home.component.css'],
  providers: [
    HomeCrudService,
    NotificationHttpService
  ]
})
export class PageMyHomeComponent {

  public homeInfo: HomesFull;
  public listRoomers: Array<User>;
  public displaySpinner: boolean;
  public isErrorLoading: boolean;

  constructor(
    private __homeCrud: HomeCrudService,
    private __notfHttp: NotificationHttpService
  ) {
    this.displaySpinner = true;
    this.isErrorLoading = false;
    this.__homeCrud.getCurrentHome()
      .then(responseHome => {
        this.homeInfo = responseHome;
        this.__homeCrud.getRoomerUsers(this.homeInfo.id)
          .then(responseRoomer => {
            this.displaySpinner = false;
            this.listRoomers = responseRoomer;
          }).catch(error => {
            this.isErrorLoading = true;
          });
      }).catch(error => {
        this.isErrorLoading = true;
      });
  }

  /**
   * Leave the Home where u are roomer
   * @param {number} homes_id id of the current users' home
   */
  public leaveHome(homes_id: number): void {
    this.displaySpinner = true;
    this.__homeCrud.desubscribed(homes_id)
      .then(response => {
        this.displaySpinner = false;
        this.__notfHttp.show(response);
      }).catch(error => {
        this.__notfHttp.show(error);
      });
  }
}
