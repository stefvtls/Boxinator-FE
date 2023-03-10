import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import keycloak from "src/keycloak";

@Injectable()
export class TokenAuthHttpInterceptor implements HttpInterceptor {

  constructor() {}

    /**
     * Automatically add the Auth Token to the Request Headers.
     * @param req request object before sending
     * @param next forward to Http Request
     * @returns HttpEvent
     */
  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    // Not authenticated. Send request without authentication token (for API routes that DO NOT require token)
    if (!keycloak.authenticated || !keycloak.token) {
      console.log(".......interceptors: header without bearer token ");
      return next.handle(request);
    } else {  // authenticated. take the token and modify headers to attach it (for API routes that require token) 
      const { token } = keycloak;

      const authRequest = request.clone({
          headers: request.headers.set("Authorization", `Bearer ${token}`),
      });
      console.log(".......interceptors: header + bearer token ");
      return next.handle(authRequest);
    }
  
  }
}
