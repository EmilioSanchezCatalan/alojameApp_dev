import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { ImgUpload } from '../interfaces/img-upload';
import { FormCreateHome } from '../interfaces/formCreateHome';
import { environment } from '../../environments/environment';

@Injectable()
export class HomeCrudService {

  constructor(
    private __http: HttpClient
  ) { }

  /**
   * Send a Home img to the backend
   * @param  {ImgUpload}   img img information and value
   * @return {Promise}      promise with the result of the img upload
   */
  public sendImgHome( img: ImgUpload ): Promise<any> {
    return this.__http.post(environment.API_URL + 'private/owner/home/uploadImg', img).toPromise();
  }

  /**
   * send all the information to the api and create a new home with the information
   * @param  {Object}  infoHome information of the home for create
   * @return {Promise}         promise with the response of the api
   */
  public create( infoHome: FormCreateHome ): Promise<any> {
    return this.__http.post(environment.API_URL + 'private/owner/home/create', infoHome).toPromise();
  }

  /**
   * get the list of all the homes items
   * @return {Promise} Promise with the response of the api
   */
  public getListHomes(): Promise<any> {
    return this.__http.get(environment.API_URL + 'private/owner/home/homes').toPromise();
  }

  /**
   * get all the full information of a home
   * @param {number}   homes_id id of the home to search
   * @return {Promise}          Promise with the response of the api
   */
  public getHomeFull(homes_id: number): Promise<any> {
    return this.__http.get(environment.API_URL + 'private/owner/home/home/' + homes_id).toPromise();
  }

  /**
   * send all the information to the api and create a new home with the information
   * @param  {Object}  infoHome information of the home for create
   * @param  {number}  homes_id id of the home to edit
   * @return {Promise}         promise with the response of the api
   */
  public edit( infoHome: FormCreateHome, homes_id: number): Promise<any> {
    return this.__http.post(environment.API_URL + 'private/owner/home/edit/' + homes_id, infoHome).toPromise();
  }

  /**
   * Remove the home indicated
   * @param  {number}  homes_id id of the home to remove
   * @return {Promise}         promise with the response of the api
   */
  public delete(homes_id: number): Promise<any> {
    return this.__http.get(environment.API_URL + 'private/owner/home/delete/' + homes_id).toPromise();
  }

  /**
   * Subscribe the user at the home for be a roomer
   * @param  {number}  homes_id id of the home to remove
   * @return {Promise}         promise with the response of the api
   */
  public subscribe(homes_id: number): Promise<any> {
    return this.__http.get(environment.API_URL + 'private/student/home/subscribe/' + homes_id).toPromise();
  }

  /**
   * Get all the homes witch the user is subscribed
   * @return {Promise}      promise with the response of the api
   */
  public getHomeSubscribed(): Promise<any> {
    return this.__http.get(environment.API_URL + 'private/student/home/homes-subscribed').toPromise();
  }

  /**
   * Desubcribed the user at the home selected
   * @param  {number}  homes_id id of the home to remove
   * @return {Promise}      promise with the response of the api
   */
  public desubscribed(homes_id: number): Promise<any> {
    return this.__http.get(environment.API_URL + 'private/student/home/homes-desubscribed/' + homes_id).toPromise();
  }

  /**
   * get the list of users that was been subscribe to the home selected
   * @param {number}   homes_id id of the home selected
   * @return {Promise}          Promise with the response of the api
   */
  public getSubscribedUsers(homes_id: number): Promise<any> {
    return this.__http.get(environment.API_URL + 'private/owner/home/subscribed-users/' + homes_id).toPromise();
  }

  /**
   * get the list of user that are roomers of the home selected
   * @param {number}   homes_id id of the home selected
   * @return {Promise}          Promise with the response of the api
   */
  public getRoomerUsers(homes_id: number): Promise<any> {
    if (localStorage.getItem('userType') === 'owner') {
      return this.__http.get(environment.API_URL + 'private/owner/home/roomers-users/' + homes_id).toPromise();
    } else {
      return this.__http.get(environment.API_URL + 'private/student/home/roomers-users/' + homes_id).toPromise();
    }
  }

  /**
   * Add a roomer from the subscribe user list
   * @param {number}   homes_id id of the home selected
   * @param {number}   users_id id of the user selected
   * @return {Promise}          Promise with the response of the api
   */
  public addRoomer(homes_id: number, users_id: number): Promise<any> {
    return this.__http.get(environment.API_URL + 'private/owner/home/add-roomer/' + homes_id + ',' + users_id).toPromise();
  }

  /**
   * Remove a user from the roomer user list
   * @param {number}   homes_id id of the home selected
   * @param {number}   users_id id of the user selected
   * @return {Promise}          Promise with the response of the api
   */
  public rmRoomer(homes_id: number, users_id: number): Promise<any> {
    return this.__http.get(environment.API_URL + 'private/owner/home/rm-roomer/' + homes_id + ',' + users_id).toPromise();
  }

  /**
   * Remove a user from the subscribe user list
   * @param {number}   homes_id id of the home selected
   * @param {number}   users_id id of the user selected
   * @return {Promise}          Promise with the response of the api
   */
  public rmSubscription(homes_id: number, users_id: number): Promise<any> {
    return this.__http.get(environment.API_URL + 'private/owner/home/rm-subscription/' + homes_id + ',' + users_id).toPromise();
  }

  /**
   * Get the home of the current user
   * @return {Promise}          Promise with the response of the api
   */
  public getCurrentHome(): Promise<any> {
    return this.__http.get(environment.API_URL + 'private/student/home/my-home').toPromise();
  }

}
