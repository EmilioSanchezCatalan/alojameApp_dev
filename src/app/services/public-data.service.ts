import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';

@Injectable()
export class PublicDataService {

  constructor(
    private __http: HttpClient
  ) { }

  /**
   * List of Home services avalible
   * @return {Promise} result of the http request with the list of services.
   */
  public getListHomeServices(): Promise<any> {
    return this.__http.get( environment.API_URL + 'public/data/home-services').toPromise();
  }

  /**
   * List of Home types avalible
   * @return {Promise} result of the http request with the list of homes'types.
   */
  public getListHomeTypes(): Promise<any> {
    return this.__http.get( environment.API_URL + 'public/data/home-types').toPromise();
  }

  /**
   * List of Home Bills avalible
   * @return {Promise} result of the http request with the list of bills.
   */
  public getListHomeBills(): Promise<any> {
    return this.__http.get( environment.API_URL + 'public/data/home-bills').toPromise();
  }

  /**
   * List of countries avalible
   * @return {Promise} result of the http request with the list of countries.
   */
  public getListCountries(): Promise<any> {
    return this.__http.get( environment.API_URL + 'public/data/countries').toPromise();
  }

  /**
   * List of provinces avalible
   * @return {Promise} result of the http request with the list of provinces.
   */
  public getListProvinces(): Promise<any> {
    return this.__http.get( environment.API_URL + 'public/data/provinces').toPromise();
  }

  /**
   * List of cities avalible
   * @return {Promise} result of the http request with the list of cities.
   */
  public getListCities(): Promise<any> {
    return this.__http.get( environment.API_URL + 'public/data/cities').toPromise();
  }
}
