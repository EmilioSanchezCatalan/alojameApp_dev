import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { FilterBrowser } from '../interfaces/filter-browser';

@Injectable()
export class HomePublicService {

  constructor(
    private __http: HttpClient
  ) { }

  /**
   * Get the list of addres where there are homes
   * @return {Promise}      promise with the list of address avaliable
   */
  public getListOfAddress(): Promise<any> {
    return this.__http.get(environment.API_URL + 'public/home/list-homes-address').toPromise();
  }

  /**
   * Get the list of homes with the conditions selected
   * @param  {string}   address addres witch is going to search
   * @param  {string}   city    code of the city to filter
   * @return {Promise}          promise with the list of address avaliable
   */
  public getListHomesItems(address: string, city: string, filter?: FilterBrowser): Promise<any> {
    let params = this.__parseToQueryParams(address, city, filter);
    return this.__http.get(environment.API_URL + 'public/home/homes', { params: params }).toPromise();
  }

  /**
   * Parse the params to a query string params format
   * @param  {string}     address addres witch is going to search
   * @param  {string}     city    code of the city to filter
   * @return {HttpParams}         list of params for the get request
   */
  private __parseToQueryParams(address: string, city: string, filter?: FilterBrowser): HttpParams {
    let params: HttpParams = new HttpParams();
    if (address) {
      params = params.append('address', address);
    }
    if (city) {
      params = params.append('city', city);
    }
    if (filter) {
      Object.keys(filter).forEach(element => {
        switch (element) {
          case 'data_in':
          if (filter[element]) {
            params = params.append('date_in', filter[element]);
          }
          break;
          case 'type_rent':
          if (filter[element].length > 0) {
            filter[element].forEach(rentId => {
              params = params.append('rentType[]', rentId.toString());
            });
          }
          break;
          case 'price_min':
          if (filter[element]) {
            params = params.append('price_min', filter[element].toString());
          }
          break;
          case 'price_max':
          if (filter[element]) {
            params = params.append('price_max', filter[element].toString());
          }
          break;
          case 'type_accomodation':
          if (filter[element].length > 0) {
            filter[element].forEach(homeTypeId => {
              params = params.append('homeType[]', homeTypeId.toString());
            });
          }
          break;
          case 'number_kitchen':
          if (filter[element]) {
            params = params.append('nKitchen', filter[element].toString());
          }
          break;
          case 'number_bathrooms':
          if (filter[element]) {
            params = params.append('nBath', filter[element].toString());
          }
          break;
          case 'number_bedthrooms':
          if (filter[element]) {
            params = params.append('nRooms', filter[element].toString());
          }
          break;
          case 'number_livingrooms':
          if (filter[element]) {
            params = params.append('nLiving', filter[element].toString());
          }
          break;
          case 'services':
          if (filter[element].length > 0) {
            filter[element].forEach(homeTypeId => {
              params = params.append('homeService[]', homeTypeId.toString());
            });
          }
          break;
          case 'smoke':
          if (filter[element]) {
            params = params.append('smoke', filter[element].toString());
          }
          break;
          case 'pets':
          if (filter[element]) {
            params = params.append('pets', filter[element].toString());
          }
          break;
        }
      });
    }

    return params;
  }

  /**
   * get all the full information of a home
   * @param {number}   homes_id id of the home to search
   * @return {Promise}          Promise with the response of the api
   */
  public getHomeFull(homes_id: number): Promise<any> {
    return this.__http.get(environment.API_URL + 'public/home/home/' + homes_id).toPromise();
  }

}
