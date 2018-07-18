import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { UserCrudService } from '../../../../services/user-crud.service';
import { User } from '../../../../interfaces/user';

@Component({
  selector: 'page-profile-show',
  templateUrl: './page-profile-show.component.html',
  styleUrls: ['./page-profile-show.component.css'],
  providers: [
    UserCrudService
  ]
})
export class PageProfileShowComponent {

  public userInfo: User;
  public isErrorLoading: boolean;
  public displaySpinner: boolean;
  public users_id: number;

  constructor(
    private __userCrud: UserCrudService,
    private __activeRoute: ActivatedRoute
  ) {
    this.isErrorLoading = false;
    this.displaySpinner = true;
    this.__activeRoute.params.subscribe( params => this.users_id = params['userId']);
    this.__userCrud.getUserInfo(this.users_id)
      .then(response => {
        this.userInfo = response;
        this.displaySpinner = false;
      }).catch(response => {
        this.isErrorLoading = true;
      });
  }

}
