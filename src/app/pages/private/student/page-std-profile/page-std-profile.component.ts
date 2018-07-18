import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { UserCrudService } from '../../../../services/user-crud.service';
import { User } from '../../../../interfaces/user';

@Component({
  selector: 'page-std-profile',
  templateUrl: './page-std-profile.component.html',
  styleUrls: ['./page-std-profile.component.css'],
  providers: [
    UserCrudService
  ]
})
export class PageStdProfileComponent {

  public userInfo: User;
  public users_id: number;
  public isErrorLoading: boolean;
  public displaySpinner: boolean;

  constructor(
    private __userCrud: UserCrudService,
    private __activeRoute: ActivatedRoute
  ) {
    this.isErrorLoading = false;
    this.displaySpinner = true;
    this.__activeRoute.params.subscribe(params => this.users_id = params['userId']);
    this.__userCrud.getUserInfo(this.users_id)
      .then(response => {
        this.userInfo = response;
        this.displaySpinner = false;
      }).catch(response => {
        this.isErrorLoading = true;
      });
  }
}
