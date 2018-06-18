import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { ImgUpload } from '../interfaces/img-upload';
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
}
