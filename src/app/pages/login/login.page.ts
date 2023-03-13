import { Component } from '@angular/core';
import keycloak from 'src/keycloak';
import { Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ApiServiceService } from 'src/app/services/api-service.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.css']
})
export class LoginPage {

  constructor(
    private readonly apiService: ApiServiceService,
    private readonly http: HttpClient) {}

  requestPublic() {
    this.apiService.getRequest("public");
  }
 
  requestAuthenticated() {
    this.apiService.getRequest("authenticated");
  }
  requestAuthorized() {
    this.apiService.getRequest("authorized");
  }
}
