/**
 * @author Emilio Sánchez Catalán <esc00019@gmail.com>
 * Purpose: show the home details selected
 */
import { Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { HomeCrudService } from '../../../../../services/home-crud.service';
import { HomesFull } from '../../../../../interfaces/homes';
import { User } from '../../../../../interfaces/user';

@Component({
  selector: 'page-own-home',
  templateUrl: './page-own-home.component.html',
  styleUrls: ['./page-own-home.component.css'],
  providers: [
    HomeCrudService
  ]
})
export class PageOwnHomeComponent implements OnInit {

  public homes_id: number;
  public homeInfo: HomesFull;
  public listRoomers: Array<User>;
  public displaySpinner: boolean;
  public isErrorLoading: boolean;

  constructor(
    private __homeCrud: HomeCrudService,
    private __activeRoute: ActivatedRoute
  ) {
    this.displaySpinner = true;
    this.__activeRoute.params.subscribe( params => this.homes_id = params.homeId );
  }

  ngOnInit() {
    Promise.all([
      this.__homeCrud.getRoomerUsers(this.homes_id),
      this.__homeCrud.getHomeFull(this.homes_id)
    ])
      .then( response => {
        this.displaySpinner = false;
        this.listRoomers = response[0];
        this.homeInfo = response[1];
      }).catch( error => {
        this.displaySpinner = false;
        this.isErrorLoading = true;
      });
  }
}
