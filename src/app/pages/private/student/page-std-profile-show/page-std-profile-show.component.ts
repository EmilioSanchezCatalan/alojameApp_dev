import { Component } from '@angular/core';

import { UserCrudService } from '../../../../services/user-crud.service';
import { User } from '../../../../interfaces/user';

@Component({
  selector: 'page-std-profile-show',
  templateUrl: './page-std-profile-show.component.html',
  styleUrls: ['./page-std-profile-show.component.css'],
  providers: [
    UserCrudService
  ]
})
export class PageStdProfileShowComponent {

  public userInfo: User;
  public isErrorLoading: boolean;
  public displaySpinner: boolean;

  constructor(
    private __userCrud: UserCrudService
  ) {
    this.isErrorLoading = false;
    this.displaySpinner = true;
    this.__userCrud.getCurrentUserStd()
      .then(response => {
        this.userInfo = response;
        this.displaySpinner = false;
      }).catch(response => {
        this.isErrorLoading = true;
      });
  }
}
