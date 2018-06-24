import { Injectable } from '@angular/core';

import { HomesFull } from '../interfaces/homes';
import { BasicTable } from '../interfaces/basic-table';
import { FormCreateHome } from '../interfaces/formCreateHome';

@Injectable()
export class ParserApiService {

  constructor() { }

  /**
   * Parse the home information to a adaptable information for edit home components
   * @param  homeInfo home information from the api with the full information
   * @param  bills    full list of the bills avaliable
   * @param  services full list of the services avaliable
   * @return          return the homeInformation parsed with the new format
   */
  public parserHomeToEdit(homeInfo: HomesFull, bills: Array<BasicTable>,
    services: Array<BasicTable>):  FormCreateHome {

    let edithomeInfo: FormCreateHome;
    edithomeInfo = {
      address: homeInfo.address,
      title: homeInfo.title,
      area: homeInfo.metres,
      city: homeInfo.cities_id,
      description: homeInfo.description,
      fiance: homeInfo.fiance,
      minStance: homeInfo.min_stance,
      avalibleDate: homeInfo.available_date,
      bill: this.parseBillHome(bills, homeInfo.HomeBills),
      homeType: homeInfo.HomeType.id,
      imgs: homeInfo.HomePictures,
      listRules: this.parseRulesHome(homeInfo.HomeRules),
      nDoor: homeInfo.num_door,
      nBedRoom: homeInfo.num_bedroom,
      nKitchen: homeInfo.num_kitchen,
      nRoomers: homeInfo.num_roomers_total,
      nBathRoom: homeInfo.num_bathroom,
      nLivingRoom: homeInfo.num_livingroom,
      pets: homeInfo.pets,
      smokers: homeInfo.smokers,
      price: homeInfo.price,
      rentType: homeInfo.typerent,
      services: this.parseServicesHome(services, homeInfo.HomeServices),
      zip: homeInfo.zip,
      nFloor: homeInfo.num_floor,
      nHome: homeInfo.num_home
    };
    return  edithomeInfo;
  }

  /**
   * Parse the bill information for a checkbox read
   * @param  bills     full list of bill avaliable
   * @param  homeBills list of bill from the home
   * @return           return the bill formated for the checkbox
   */
  public parseBillHome(bills: Array<BasicTable>, homeBills: Array<BasicTable>): Array<{ id: number, isChecked: boolean}> {
    let billParsed: Array<{ id: number, isChecked: boolean}> = [];
    bills.forEach( element => {
      billParsed.push({ id: element.id, isChecked: false });
    });
    billParsed.forEach( element => {
      homeBills.forEach( element2 => {
        if (element.id === element2.id) {
          element.isChecked = true;
        }
      });
    });
    return billParsed;
  }

  /**
   * Parse the services information for a checkbox read
   * @param  bills     full list of services avaliable
   * @param  homeBills list of services from the home
   * @return           return the services formated for the checkbox
   */
  public parseServicesHome(services: Array<BasicTable>, homeServices: Array<BasicTable>): Array<{ id: number, isChecked: boolean}> {
    let servicesParsed: Array<{ id: number, isChecked: boolean}> = [];
    services.forEach( element => {
      servicesParsed.push({ id: element.id, isChecked: false });
    });
    servicesParsed.forEach( element => {
      homeServices.forEach( element2 => {
        if (element.id === element2.id) {
          element.isChecked = true;
        }
      });
    });
    return servicesParsed;
  }

  /**
   * Parse the home rules information for a checkbox read
   * @param  bills     full list of home rules avaliable
   * @param  homeBills list of home rules from the home
   * @return           return the home rules formated for the checkbox
   */
  public parseRulesHome(rules: Array<{ id: number, text: string, type: number}>): Array<{rule: string, type: number}> {
    let parseRules: Array<{rule: string, type: number}> = [];
    rules.forEach( element => {
      parseRules.push({ rule: element.text, type: element.type });
    });
    return parseRules;
  }
}
