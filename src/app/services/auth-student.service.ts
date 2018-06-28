import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable()
export class AuthStudentService {

    constructor() { }

    /**
     * Set the owner authentication on the app
     * @param  authToken auth token that verify the user
     */
    public setAuth(authToken): void {
      localStorage.setItem('authToken', authToken);
      localStorage.setItem('userType', 'student');
    }

    /**
     * Logout the app login
     */
    public logout(): void {
      localStorage.clear();
      localStorage.setItem('userType', 'public');
    }

}
