/**
 * @author Emilio Sánchez Catalán
 * Purpose: edit the configuration of a home
 */
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { FormCreateHome } from '../../../../../interfaces/formCreateHome';
import { PublicDataService } from '../../../../../services/public-data.service';
import { NotificationHttpService } from '../../../../../services/notification-http.service';
import { ErrorSimpleNotificationService } from '../../../../../services/error-simple-notification.service';
import { HomeCrudService } from '../../../../../services/home-crud.service';
import { ParserApiService } from '../../../../../services/parser-api.service';

@Component({
  selector: 'page-own-home-edit',
  templateUrl: './page-own-home-edit.component.html',
  styleUrls: ['./page-own-home-edit.component.css'],
  providers: [
    PublicDataService,
    NotificationHttpService,
    ErrorSimpleNotificationService,
    HomeCrudService,
    ParserApiService
  ]
})
export class PageOwnHomeEditComponent implements OnInit {

  public dataPage: any;
  public isErrorLoading: boolean;
  public displaySpinner: boolean;
  public showResult: boolean;
  public homeEdit: FormCreateHome;
  public homes_id: number;
  public ready: {
    homeType: boolean;
    homeRooms: boolean;
    homeServices: boolean;
    homeRules: boolean;
    homeAddress: boolean;
    homeAd: boolean;
    homeImg: boolean;
    homeDescription: boolean;
  };

  constructor(
    private __publicData: PublicDataService,
    private __errorNotif: ErrorSimpleNotificationService,
    private __crudHome: HomeCrudService,
    private __notfHttp: NotificationHttpService,
    private __activeRoute: ActivatedRoute,
    private __parserApi: ParserApiService,
    private __router: Router
  ) {
    this.isErrorLoading = false;
    this.displaySpinner = false;
    this.showResult = false;
    this.__activeRoute.params.subscribe( params => {
      this.homes_id = params.homeId;
    });
    this.ready = {
      homeAd: false,
      homeAddress: false,
      homeDescription: false,
      homeImg: false,
      homeRooms: false,
      homeRules: false,
      homeServices: false,
      homeType: false,
    };
  }

  ngOnInit() {
    this.displaySpinner = true;
    Promise.all([
      this.__publicData.getListHomeServices(),
      this.__publicData.getListHomeBills(),
      this.__publicData.getListHomeTypes(),
      this.__publicData.getListCities(),
      this.__crudHome.getHomeFull(this.homes_id)
    ]).then( responses => {
      this.dataPage = {
        services: responses[0],
        bills: responses[1],
        hometypes: responses[2],
        cities: responses[3]
      };
      this.homeEdit = this.__parserApi.parserHomeToEdit(responses[4], this.dataPage.bills, this.dataPage.services);
      console.log(this.homeEdit);
      this.displaySpinner = false;
    }).catch( error => {
      this.isErrorLoading = true;
    });
  }

  /**
   * Reset the trigger for send the information
   */
  public resetTriggers(): void {
    this.ready = {
      homeAd: false,
      homeAddress: false,
      homeDescription: false,
      homeImg: false,
      homeRooms: false,
      homeRules: false,
      homeServices: false,
      homeType: false,
    };
    this.showResult = false;
  }

  /**
   * Get the home type form data
   * @param {Object} event json with the information form of the homeType section
   */
  public getHomeType( event: any ): void {
    if ( event.homeType && event.area && event.rentType && event.nRoomers) {
      this.homeEdit.homeType = event.homeType;
      this.homeEdit.area = event.area;
      this.homeEdit.rentType = event.rentType;
      this.homeEdit.nRoomers = event.nRoomers;
      this.ready.homeType = true;
      this.allFinished();
    } else {
      this.resetTriggers();
      this.__errorNotif.show('Hay campos obligatorios sin rellenar, completelos correctamente');
    }
  }

  /**
   * Get the home rooms form data
   * @param {Object} event json with the information form of the home rooms section
   */
  public getHomeRooms( event: any ): void {
    if (event.nBedRoom && event.nKitchen && event.nBathRoom) {
      this.homeEdit.nBedRoom = event.nBedRoom;
      this.homeEdit.nKitchen = event.nKitchen;
      this.homeEdit.nBathRoom = event.nBathRoom;
      this.homeEdit.nLivingRoom = event.nLivingRoom;
      this.ready.homeRooms = true;
      this.allFinished();
    } else {
      this.resetTriggers();
      this.__errorNotif.show('Hay campos obligatorios sin rellenar, completelos correctamente');
    }
  }

  /**
   * Get the home service from form Data
   * @param {Array<boolean>} event Array with the checkbox of the service
   */
  public getHomeServices( event: Array<any> ): void {
    if (event.length !== 0) {
      this.homeEdit.services = event.slice();
      this.ready.homeServices = true;
      this.allFinished();
    } else {
      this.resetTriggers();
      this.__errorNotif.show('Hay campos obligatorios sin rellenar, completelos correctamente');
    }
  }

  /**
   * Get the home address information
   * @param {Object} event form data of the address information
   */
  public getHomeAddress( event: any): void {
    if ( event.address && event.city && event.nDoor && event.zip && event.nHome && event.nFloor) {
      this.homeEdit.address = event.address;
      this.homeEdit.city = event.city;
      this.homeEdit.nDoor = event.nDoor;
      this.homeEdit.zip = event.zip;
      this.homeEdit.nHome = event.nHome;
      this.homeEdit.nFloor = event.nFloor;
      this.ready.homeAddress = true;
      this.allFinished();
    } else {
      this.resetTriggers();
      this.__errorNotif.show('Hay campos obligatorios sin rellenar, completelos correctamente');
    }
  }

  /**
   * Get the home address information
   * @param {Object} event form data of the address information
   */
  public getHomeRules( event: any): void {
    if ( event.pets && event.smokers) {
      this.homeEdit.pets = event.pets === 'true' ? true : false;
      this.homeEdit.smokers = event.smokers === 'true' ? true : false;
      this.homeEdit.listRules = event.listRules.slice();
      this.ready.homeRules = true;
      this.allFinished();
    } else {
      this.resetTriggers();
      this.__errorNotif.show('Hay campos obligatorios sin rellenar, completelos correctamente');
    }
  }

  /**
   * Get the home address information
   * @param {Object} event form data of the address information
   */
  public getHomeAd( event: any): void {
    if ( event.title && event.price) {
      this.homeEdit.title = event.title;
      this.homeEdit.price = event.price;
      this.homeEdit.minStance = event.minStance;
      this.homeEdit.fiance = event.fiance;
      this.homeEdit.avalibleDate = event.avalibleDate;
      this.homeEdit.bill = event.bill.slice();
      this.ready.homeAd = true;
      this.allFinished();
    } else {
      this.resetTriggers();
      this.__errorNotif.show('Hay campos obligatorios sin rellenar, completelos correctamente');
    }
  }

  /**
   * Get the home description information
   * @param {string} event form data of the description information
   */
  public getHomeDescription( event: any): void {
    if ( event ) {
      this.homeEdit.description = event;
      this.ready.homeDescription = true;
      this.allFinished();
    } else {
      this.resetTriggers();
      this.__errorNotif.show('Hay campos obligatorios sin rellenar, completelos correctamente');
    }
  }

  /**
   * Get the home Imgs information
   * @param {string} event form data of the description information
   */
  public getHomeImgs( event: any): void {
    if ( event.length >= 3 ) {
      this.homeEdit.imgs = event.slice();
      this.ready.homeImg = true;
      this.allFinished();
    } else {
      this.resetTriggers();
      this.__errorNotif.show('Es necesario como mínimo tres fotografias');
    }
  }

  /**
   * Active the events sendInfo of the components
   */
  public triggerComponents(): void {
    this.showResult = true;
  }

  /**
   * Check all the forms are correct and edit the home
   */
  public allFinished(): void {
    if (
      this.ready.homeAd === true && this.ready.homeImg === true && this.ready.homeType === true
      && this.ready.homeRooms === true && this.ready.homeRules === true && this.ready.homeAddress === true
      && this.ready.homeDescription === true
    ) {
      this.displaySpinner = true;
      this.__crudHome.edit(this.homeEdit, this.homes_id)
        .then( response => {
          this.displaySpinner = false;
          this.__notfHttp.show(response);
          this.__router.navigate(['private', 'owner', 'own-homes']);
        }).catch( error => {
          this.displaySpinner = false;
          this.__notfHttp.show(error);
          this.resetTriggers();
        });
    }
  }
}
