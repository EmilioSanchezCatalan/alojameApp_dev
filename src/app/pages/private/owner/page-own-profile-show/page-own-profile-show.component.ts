/**
 * @author Emilio Sánchez Catalán <esc00019@gmail.com>
 * Purpose: view the list of profile of stdents
 */
import { Component } from '@angular/core';

import { UserCrudService } from '../../../../services/user-crud.service';
import { User } from '../../../../interfaces/user';

@Component({
  selector: 'page-own-profile-show',
  templateUrl: './page-own-profile-show.component.html',
  styleUrls: ['./page-own-profile-show.component.css'],
  providers: [
    UserCrudService
  ]
})
export class PageOwnProfileShowComponent {

  public userInfo: User;
  public isErrorLoading: boolean;
  public displaySpinner: boolean;

  constructor(
    private __userCrud: UserCrudService
  ) {
    this.isErrorLoading = false;
    this.displaySpinner = true;
    this.__userCrud.getCurrentUserOwner()
      .then(response => {
        this.userInfo = response;
        this.displaySpinner = false;
      }).catch(response => {
        this.isErrorLoading = true;
      });
  }
}
