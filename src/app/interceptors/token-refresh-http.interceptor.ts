import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { from, Observable, switchMap } from "rxjs";
import keycloak from "src/keycloak";
import { environment } from 'src/environments/environment';


@Injectable()
export class TokenRefreshHttpInterceptor implements HttpInterceptor {

  constructor() {}


    /**
     * Automatically add the Auth Token to the Request Headers.
     * @param req request object before sending
     * @param next forward to Http Request
     * @returns HttpEvent
     */
  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if (!keycloak.authenticated || keycloak.isTokenExpired() === false) {
      console.log(".......interceptors: token still valid");
      return next.handle(request);
    } else {
      const { TIME_TO_REFRESH_TOKEN_IN_SECONDS } = environment;
      console.log(".......interceptors: token refreshed ");
      return from(keycloak.updateToken(TIME_TO_REFRESH_TOKEN_IN_SECONDS)).pipe(
          switchMap(() => {
            return next.handle(request);
          })
      );
    }
  }     
}
