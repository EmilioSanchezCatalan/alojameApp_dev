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

  public getListHomes(): Promise<any> {
    return this.__http.get(environment.API_URL + 'private/owner/home/homes').toPromise();
  }
}
