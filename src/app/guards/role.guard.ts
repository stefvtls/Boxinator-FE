import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from "@angular/router";
import keycloak from 'src/keycloak';

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {

  constructor(private router: Router){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      const { realmRole } = route.data;
      if (!keycloak.authenticated) {
        this.router.navigateByUrl('/login');
        return false;
      } else if ( keycloak.hasRealmRole(realmRole)) {
        return true;
      } else {
        this.router.navigateByUrl('/profile');
        window.alert("sorry, but you do not have permissions to access this page. If you think you should be able to view this page contact our support team.");
        return false;
      }
  }
}
