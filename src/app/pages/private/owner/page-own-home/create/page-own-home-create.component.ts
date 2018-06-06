/**
 * @author Emilio Sánchez Catalán <esc00019@gmail.com>
 * Purpose: page in order to create a new home
 */
import { Component, OnInit } from '@angular/core';

import { FormCreateHome } from '../../../../../interfaces/formCreateHome';
import { PublicDataService } from '../../../../../services/public-data.service';

declare var $: any;

@Component({
  selector: 'page-own-home-create',
  templateUrl: './page-own-home-create.component.html',
  styleUrls: ['./page-own-home-create.component.css'],
  providers: [PublicDataService]
})
export class PageOwnHomeCreateComponent implements OnInit {

  public actualStep: number;
  public listSteps: Array<string>;
  public jsonCreateHome: FormCreateHome;
  public dataPage: any;
  public isErrorLoading: boolean;

  constructor(
    private __publicData: PublicDataService
  ) {
    this.actualStep = 0;
    this.listSteps = ['type', 'rooms', 'services', 'address', 'rules', 'ad', 'imgs', 'finish'];
    this.jsonCreateHome = {
      homeType: null,
      area: null,
      rentType: null,
      nRoomers: null,
      address: null,
      avalibleDate: null,
      bill: null,
      city: null,
      finace: null,
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
      zip: null
    };
    this.isErrorLoading = false;
  }

  ngOnInit() {
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
      console.log(this.dataPage);
    }).catch( error => {
      this.isErrorLoading = true;
    });
  }

  /**
   * Sum one at the creations steps
   */
  public nextStep(): void {
    if (this.actualStep < (this.listSteps.length - 1) ) {
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
    this.jsonCreateHome.homeType = event.homeType;
    this.jsonCreateHome.area = event.area;
    this.jsonCreateHome.rentType = event.rentType;
    this.jsonCreateHome.nRoomers = event.nRoomers;
  }

  /**
   * Get the home rooms form data
   * @param {Object} event json with the information form of the home rooms section
   */
  public getHomeRooms( event: any ): void {
    this.jsonCreateHome.nBedRoom = event.nBedRoom;
    this.jsonCreateHome.nKitchen = event.nKitchen;
    this.jsonCreateHome.nBathRoom = event.nBathRoom;
    this.jsonCreateHome.nLivingRoom = event.nLivingRoom;
  }


}
