/**
 * @author Emilio Sánchez Catalán <esc00019@gmail.com>
 * Purpose: view that allow to the owner edit his profile
 */
import { Component } from '@angular/core';

import { User } from '../../../../interfaces/user';
import { BasicTable } from '../../../../interfaces/basic-table';

import { UserCrudService } from '../../../../services/user-crud.service';
import { PublicDataService } from '../../../../services/public-data.service';
import { ErrorSimpleNotificationService } from '../../../../services/error-simple-notification.service';
import { NotificationHttpService } from '../../../../services/notification-http.service';

@Component({
  selector: 'page-own-profile-conf',
  templateUrl: './page-own-profile-conf.component.html',
  styleUrls: ['./page-own-profile-conf.component.css'],
  providers: [
    UserCrudService,
    PublicDataService,
    ErrorSimpleNotificationService,
    NotificationHttpService
  ]
})
export class PageOwnProfileConfComponent {

  public userInfo: User;
  public countries: Array<BasicTable>;
  public cities: Array<BasicTable>;
  public displaySpinner: boolean;
  public isErrorLoading: boolean;
  public showResult: boolean;
  public ready: { personalInfo: boolean; ownerInfo: boolean; };

  constructor(
    private __userCrud: UserCrudService,
    private __publicData: PublicDataService,
    private __errorNotf: ErrorSimpleNotificationService,
    private __notfHttp: NotificationHttpService
  ) {
    this.isErrorLoading = false;
    this.displaySpinner = true;
    this.showResult = false;
    this.ready = {
      personalInfo: false,
      ownerInfo: false
    };
    Promise.all([
      this.__userCrud.getCurrentUser(),
      this.__publicData.getListCountries(),
      this.__publicData.getListCities()
    ]).then(response => {
        this.displaySpinner = false;
        this.userInfo = response[0];
        this.countries = response[1];
        this.cities = response[2];
      }).catch( error => {
        this.isErrorLoading = true;
      });
  }

  /**
   * Get the personal info emmit by the component
   */
  public getPersonalInfo(event: User): void {
    if (event.email && event.Userinfo.name && event.Userinfo.surname && event.Userinfo.birthdate) {
      this.userInfo = event;
      this.ready.personalInfo = true;
      this.saveProfileInfo();
    } else {
      this.__errorNotf.show('Es necesario que rellene los campos: Email, Nombre, Apellidos y fecha de nacimiento');
    }
  }

  /**
   * Get the personal info emmit by the component
   */
  public getOwnerInfo(event: User): void {
    this.userInfo = event;
    this.ready.ownerInfo = true;
    this.saveProfileInfo();
  }

  /**
   * Active the components for send their own information
   */
  public triggersResult(): void {
    this.showResult = true;
  }

  /**
   * Send to the api the new user information
   */
  public saveProfileInfo(): void {
    this.showResult = false;
    if (this.ready.ownerInfo === true && this.ready.personalInfo === true) {
      this.__userCrud.sendProfileInf(this.userInfo)
        .then(response => {
          this.showResult = false;
          this.ready = {
            ownerInfo: false,
            personalInfo: false
          };
          this.__notfHttp.show(response);
        }).catch(error => {
          this.showResult = false;
          this.ready = {
            ownerInfo: false,
            personalInfo: false
          };
          this.__notfHttp.show(error);
        });
    }
  }

}
