/**
 * @author Emilio Sánchez Catalán <esc00019@gmail.com>
 * Purpose: page in order to create a new home
 */
import { Component, OnInit } from '@angular/core';

import { FormCreateHome } from '../../../../../interfaces/formCreateHome';
import { PublicDataService } from '../../../../../services/public-data.service';
import { ErrorSimpleNotificationService } from '../../../../../services/error-simple-notification.service';

declare var $: any;

@Component({
  selector: 'page-own-home-create',
  templateUrl: './page-own-home-create.component.html',
  styleUrls: ['./page-own-home-create.component.css'],
  providers: [
    PublicDataService,
    ErrorSimpleNotificationService
  ]
})
export class PageOwnHomeCreateComponent implements OnInit {

  public actualStep: number;
  public listSteps: Array<string>;
  public jsonCreateHome: FormCreateHome;
  public dataPage: any;
  public isErrorLoading: boolean;
  public displaySpinner: boolean;
  public showResult: {
    homeType: boolean,
    homeRooms: boolean,
    homeServices: boolean,
    homeAddress: boolean,
    homeRules: boolean,
    homeAd: boolean,
    homeDescription: boolean,
    homeImgs: boolean
  };

  constructor(
    private __publicData: PublicDataService,
    private __errorNotif: ErrorSimpleNotificationService
  ) {
    this.actualStep = 0;
    this.listSteps = ['type', 'rooms', 'services', 'address', 'rules', 'ad', 'description', 'imgs', 'finish'];
    this.jsonCreateHome = {
      homeType: null,
      area: null,
      rentType: null,
      nRoomers: null,
      address: null,
      avalibleDate: null,
      bill: null,
      city: null,
      fiance: null,
      listRules: null,
      minStance: null,
      nBathRoom: null,
      nBedRoom: null,
      nDoor: null,
      nKitchen: null,
      nLivingRoom: null,
      pets: null,
      price: null,
      services: null,
      smokers: null,
      title: null,
      zip: null,
      description: null
    };
    this.isErrorLoading = false;
    this.displaySpinner = false;
    this.showResult = {
      homeType: false,
      homeRooms: false,
      homeServices: false,
      homeAddress: false,
      homeRules: false,
      homeAd: false,
      homeDescription: false,
      homeImgs: false
    };
  }

  ngOnInit() {
    this.displaySpinner = true;
    Promise.all([
      this.__publicData.getListHomeServices(),
      this.__publicData.getListHomeBills(),
      this.__publicData.getListHomeTypes(),
      this.__publicData.getListCities(),
    ]).then( responses => {
      this.dataPage = {
        services: responses[0],
        bills: responses[1],
        hometypes: responses[2],
        cities: responses[3]
      };
      this.displaySpinner = false;
    }).catch( error => {
      this.isErrorLoading = true;
    });
  }

  /**
   * Trigger for invoque the form results components
   */
  public triggerResultsForms(): void {
    switch (this.listSteps[this.actualStep]) {
      case 'type':
        this.showResult.homeType = true;
        break;
      case 'rooms':
        this.showResult.homeRooms = true;
        break;
      case 'services':
        this.showResult.homeServices = true;
        break;
      case 'address':
        this.showResult.homeAddress = true;
        break;
      case 'rules':
        this.showResult.homeRules = true;
        break;
      case 'ad':
        this.showResult.homeAd = true;
        break;
      case 'description':
        this.showResult.homeDescription = true;
        break;
      case 'imgs':
        break;
    }
  }

  /**
   * Sum one at the creations steps
   */
  public nextStep(): void {
    if (this.actualStep < (this.listSteps.length - 1)) {
      console.log(this.jsonCreateHome);
      this.actualStep++;
    }
  }

  /**
   * Res one at the creations steps
   */
  public preStep(): void {
    if (this.actualStep > 0) {
      this.actualStep--;
    }
  }

  /**
   * Get the home type form data
   * @param {Object} event json with the information form of the homeType section
   */
  public getHomeType( event: any ): void {
    console.log('Entra en HomeType');
    this.showResult.homeType = false;
    if ( event.homeType && event.area && event.rentType && event.nRoomers) {
      this.jsonCreateHome.homeType = event.homeType;
      this.jsonCreateHome.area = event.area;
      this.jsonCreateHome.rentType = event.rentType;
      this.jsonCreateHome.nRoomers = event.nRoomers;
      this.nextStep();
    } else {
      this.__errorNotif.show('Hay campos obligatorios sin rellenar, completelos correctamente');
    }
  }

  /**
   * Get the home rooms form data
   * @param {Object} event json with the information form of the home rooms section
   */
  public getHomeRooms( event: any ): void {
    console.log('Entra en Rooms');
    this.showResult.homeRooms = false;
    if (event.nBedRoom && event.nKitchen && event.nBathRoom) {
      this.jsonCreateHome.nBedRoom = event.nBedRoom;
      this.jsonCreateHome.nKitchen = event.nKitchen;
      this.jsonCreateHome.nBathRoom = event.nBathRoom;
      this.jsonCreateHome.nLivingRoom = event.nLivingRoom;
      this.nextStep();
    } else {
      this.__errorNotif.show('Hay campos obligatorios sin rellenar, completelos correctamente');
    }
  }

  /**
   * Get the home service from form Data
   * @param {Array<boolean>} event Array with the checkbox of the service
   */
  public getHomeServices( event: Array<any> ): void {
    console.log('Entra en Services');
    this.showResult.homeServices = false;
    if (event.length !== 0) {
      this.jsonCreateHome.services = event.slice();
      this.nextStep();
    } else {
      this.__errorNotif.show('Hay campos obligatorios sin rellenar, completelos correctamente');
    }
  }

  /**
   * Get the home address information
   * @param {Object} event form data of the address information
   */
  public getHomeAddress( event: any): void {
    console.log('Entra en Address');
    this.showResult.homeAddress = false;
    if ( event.address && event.city && event.nDoor && event.zip) {
      this.jsonCreateHome.address = event.address;
      this.jsonCreateHome.city = event.city;
      this.jsonCreateHome.nDoor = event.nDoor;
      this.jsonCreateHome.zip = event.zip;
      this.nextStep();
    } else {
      this.__errorNotif.show('Hay campos obligatorios sin rellenar, completelos correctamente');
    }
  }

  /**
   * Get the home address information
   * @param {Object} event form data of the address information
   */
  public getHomeRules( event: any): void {
    console.log('Entra en Rules');
    this.showResult.homeRules = false;
    if ( event.pets && event.smokers) {
      this.jsonCreateHome.pets = event.pets === 'true' ? true : false;
      this.jsonCreateHome.smokers = event.smokers === 'true' ? true : false;
      this.jsonCreateHome.listRules = event.listRules.slice();
      this.nextStep();
    } else {
      this.__errorNotif.show('Hay campos obligatorios sin rellenar, completelos correctamente');
    }
  }

  /**
   * Get the home address information
   * @param {Object} event form data of the address information
   */
  public getHomeAd( event: any): void {
    console.log('Entra en Ad');
    this.showResult.homeAd = false;
    if ( event.title && event.price) {
      this.jsonCreateHome.title = event.title;
      this.jsonCreateHome.price = event.price;
      this.jsonCreateHome.minStance = event.minStance;
      this.jsonCreateHome.fiance = event.fiance;
      this.jsonCreateHome.avalibleDate = event.avalibleDate;
      this.jsonCreateHome.bill = event.bill.slice();
      this.nextStep();
    } else {
      this.__errorNotif.show('Hay campos obligatorios sin rellenar, completelos correctamente');
    }
  }

  /**
   * Get the home description information
   * @param {string} event form data of the description information
   */
  public getHomeDescription( event: any): void {
    console.log('Entra en Description');
    this.showResult.homeDescription = false;
    if ( event ) {
      this.jsonCreateHome.description = event;
      this.nextStep();
    } else {
      this.__errorNotif.show('Hay campos obligatorios sin rellenar, completelos correctamente');
    }
  }
}
