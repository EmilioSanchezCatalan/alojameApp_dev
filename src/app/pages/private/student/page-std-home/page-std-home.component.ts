/**
 * @author Emilio Sánchez Catalán <esc00019@gmail.com>
 * Purpose: show the view detail of a home
 */
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { HomesFull } from '../../../../interfaces/homes';
import { HomePublicService } from '../../../../services/home-public.service';
import { HomeCrudService } from '../../../../services/home-crud.service';
import { NotificationHttpService } from '../../../../services/notification-http.service';
import { User } from '../../../../interfaces/user';

@Component({
  selector: 'page-home',
  templateUrl: './page-std-home.component.html',
  styleUrls: ['./page-std-home.component.css'],
  providers: [
    HomePublicService,
    HomeCrudService,
    NotificationHttpService
  ]
})
export class PageStdHomeComponent implements OnInit {

  public homes_id: number;
  public homeInfo: HomesFull;
  public displaySpinner: boolean;
  public isErrorLoading: boolean;
  public listRoomers: Array<User>;

  constructor(
    private __activeRoute: ActivatedRoute,
    private __homePublic: HomePublicService,
    private __homeCrud: HomeCrudService,
    private __notfHttp: NotificationHttpService
  ) {
    this.displaySpinner = true;
    this.__activeRoute.params.subscribe( params => this.homes_id = params.homeId );

  }

  ngOnInit() {
    Promise.all([
      this.__homeCrud.getRoomerUsers(this.homes_id),
      this.__homePublic.getHomeFull(this.homes_id)
    ])
      .then( response => {
        this.displaySpinner = false;
        this.listRoomers = response[0];
        this.homeInfo = response[1];
      }).catch( error => {
        this.isErrorLoading = true;
      });
  }

}
