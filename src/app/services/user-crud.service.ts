import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { ImgUpload } from '../interfaces/img-upload';
import { User } from '../interfaces/user';
import { environment } from '../../environments/environment';

@Injectable()
export class UserCrudService {

  constructor(
    private __http: HttpClient
  ) { }


  /**
   * Send a Home img to the backend
   * @param  {ImgUpload}   img img information and value
   * @return {Promise}      promise with the result of the img upload
   */
  public sendImgProfileOwner( img: ImgUpload ): Promise<any> {
    return this.__http.post(environment.API_URL + 'private/owner/user/uploadImg', img).toPromise();
  }

  /**
   * Send the picture id for associtate to the user
   * @param  {number}   pictures_id id of the picture on DDBB
   * @return {Promise}              promise with the success response
   */
  public addImgToProfileOwner(pictures_id: number) {
    return this.__http.post(environment.API_URL + 'private/owner/user/addImg', { pictures_id: pictures_id }).toPromise();
  }

  /**
   * Get the current user profile information
   * @return {Promise}      result with all the api my-profile information
   */
  public getCurrentUserOwner(): Promise<any> {
    return this.__http.get(environment.API_URL + 'private/owner/user/my-profile').toPromise();
  }

  /**
   * Update the information of the userInfo for the current user
   * @return {Promise}      susccess mesage if all go right
   */
  public sendProfileInfOwner( userInfo: User): Promise<any> {
    return this.__http.post(environment.API_URL + 'private/owner/user/my-profile', userInfo).toPromise();
  }

  /**
   * Get the current user profile information
   * @return {Promise}      result with all the api my-profile information
   */
  public getCurrentUserStd(): Promise<any> {
    return this.__http.get(environment.API_URL + 'private/student/user/my-profile').toPromise();
  }

  /**
   * Update the information of the userInfo for the current user
   * @return {Promise}      susccess mesage if all go right
   */
  public sendProfileInfStd( userInfo: User): Promise<any> {
    return this.__http.post(environment.API_URL + 'private/student/user/my-profile', userInfo).toPromise();
  }

  /**
   * Send a Home img to the backend
   * @param  {ImgUpload}   img img information and value
   * @return {Promise}      promise with the result of the img upload
   */
  public sendImgProfileStd( img: ImgUpload ): Promise<any> {
    return this.__http.post(environment.API_URL + 'private/student/user/uploadImg', img).toPromise();
  }

  /**
   * Send the picture id for associtate to the user
   * @param  {number}   pictures_id id of the picture on DDBB
   * @return {Promise}              promise with the success response
   */
  public addImgToProfileStd(pictures_id: number) {
    return this.__http.post(environment.API_URL + 'private/student/user/addImg', { pictures_id: pictures_id }).toPromise();
  }

  /**
   * get user public information
   * @param {number}   users_id id of the user selected
   * @return {Promise}          Promise with the response of the api
   */
  public getUserInfo(users_id: number): Promise<any> {
    if (localStorage.getItem('userType') === 'owner') {
      return this.__http.get(environment.API_URL + 'private/owner/user/profile-user/' + users_id).toPromise();
    } else {
      return this.__http.get(environment.API_URL + 'private/student/user/user-profile/' + users_id).toPromise();
    }
  }

  /**
   * the conversation between the current user and the user selected
   * @param {number}   users_id id of the user selected
   * @return {Promise}          Promise with the response of the api
   */
  public getUserConversation(users_id: number): Promise<any> {
    if (localStorage.getItem('userType') === 'owner') {
      return this.__http.get(environment.API_URL + 'private/owner/user/conversation-user/' + users_id).toPromise();
    } else {
      return this.__http.get(environment.API_URL + 'private/student/user/conversation-user/' + users_id).toPromise();
    }
  }

  /**
   * Send a message to the user selected
   * @param {number}   users_id id of the user selected
   * @return {Promise}          Promise with the response of the api
   */
  public sendMessage(message: string, users_id: number): Promise<any> {
    if (localStorage.getItem('userType') === 'owner') {
      return this.__http.post(environment.API_URL + 'private/owner/user/send-message/' + users_id, {message: message}).toPromise();
    } else {
      return this.__http.post(environment.API_URL + 'private/student/user/send-message/' + users_id, {message: message}).toPromise();
    }
  }
}
