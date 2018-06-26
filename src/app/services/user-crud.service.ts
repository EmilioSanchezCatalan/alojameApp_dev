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
  public sendImgProfile( img: ImgUpload ): Promise<any> {
    return this.__http.post(environment.API_URL + 'private/owner/user/uploadImg', img).toPromise();
  }

  /**
   * Send the picture id for associtate to the user
   * @param  {number}   pictures_id id of the picture on DDBB
   * @return {Promise}              promise with the success response
   */
  public addImgToProfile(pictures_id: number) {
    return this.__http.post(environment.API_URL + 'private/owner/user/addImg', { pictures_id: pictures_id }).toPromise();
  }

  /**
   * Get the current user profile information
   * @return {Promise}      result with all the api my-profile information
   */
  public getCurrentUser(): Promise<any> {
    return this.__http.get(environment.API_URL + 'private/owner/user/my-profile').toPromise();
  }

  /**
   * Update the information of the userInfo for the current user
   * @return {Promise}      susccess mesage if all go right
   */
  public sendProfileInf( userInfo: User): Promise<any> {
    return this.__http.post(environment.API_URL + 'private/owner/user/my-profile', userInfo).toPromise();
  }
}
