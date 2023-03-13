import { Component } from '@angular/core';
import keycloak from 'src/keycloak';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.css']
})
export class LoginPage {



  requestPublic() {
    const { apiURL } =  environment;

  }
 
  requestAuthenticated() {
    
  }
  requestAuthorized() {
    
  }
}
