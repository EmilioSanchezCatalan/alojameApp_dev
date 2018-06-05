import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable()
export class AuthOwnerService {

  constructor(
      private __http: HttpClient
  ) { }

  /**
   * Send to the API a new user
   * @param  {any}      formData Form data for the register user
   * @return {Promise}           return a promise result after the connexion
   */
  public register(formData: any): Promise<any> {
      return this.__http.post(environment.API_URL + 'public/simple-auth/register', formData).toPromise();
  }

  /**
   * Send to the API the user and password singin on the platform
   * @param  {any} formData username and password in JSON format
   * @return {Promise}      return a promise with the result of the API
   */
  public login(formData: any): Promise<any> {
    return this.__http.post(environment.API_URL + 'public/simple-auth/login', formData).toPromise();
  }

  /**
   * Set the owner authentication on the app
   * @param  authToken auth token that verify the user
   */
  public setAuth(authToken): void {
    localStorage.setItem('authToken', authToken);
    localStorage.setItem('userType', 'owner');
  }

  /**
   * Logout the app login
   */
  public logout(): void {
    localStorage.clear();
    localStorage.setItem('userType', 'public');
  }
}
