import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class HttpInterceptorService implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (localStorage.getItem('authToken')) {
      request = request.clone({
        setHeaders: {
          Authorization: localStorage.getItem('authToken')
        }
      });
    } else {
      request = request.clone();
    }
    return next.handle(request);
  }
}
