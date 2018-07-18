import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { HomeCrudService } from '../../../../../services/home-crud.service';
import { NotificationHttpService } from '../../../../../services/notification-http.service';
import { User } from '../../../../../interfaces/user';

@Component({
  selector: 'page-own-home-students',
  templateUrl: './page-own-home-students.component.html',
  styleUrls: ['./page-own-home-students.component.css'],
  providers: [
    HomeCrudService,
    NotificationHttpService
  ]
})
export class PageOwnHomeStudentsComponent {

  public displaySpinner: boolean;
  public isErrorLoading: boolean;
  public homes_id: number;
  public listRoomers: Array<User>;
  public listSubscribers: Array<User>;

  constructor(
    private __homeCrud: HomeCrudService,
    private __notfHttp: NotificationHttpService,
    private __activeRoute: ActivatedRoute
  ) {
    this.isErrorLoading = false;
    this.__activeRoute.params.subscribe(params => {
      this.homes_id = params['homeId'];
    });
    this.getUsersLists();
  }

  /**
   * Get the information of the user list( users subscribed at home and roomers of the home)
   */
  public getUsersLists(): void {
    this.displaySpinner = true;
    Promise.all([
      this.__homeCrud.getRoomerUsers(this.homes_id),
      this.__homeCrud.getSubscribedUsers(this.homes_id)
    ]).then(response => {
      this.displaySpinner = false;
      this.listRoomers = response[0];
      this.listSubscribers = response[1];
    }).catch(error => {
      this.isErrorLoading = true;
    });
  }
}
