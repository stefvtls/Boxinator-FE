import { Component } from '@angular/core';
import keycloak from 'src/keycloak';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.css']
})
export class LoginPage {


  handleLogin() {
    keycloak.login();
    // save a state in account service
    // check if user exist in our db -> get API with the subID
  }
  handleLogout(){
    keycloak.logout();
    // clear state in account service
   }

  handleDisplayToken() {
    console.log("USER/SUB ID");
    console.log("userID", keycloak.tokenParsed?.sub);
    console.log("username", keycloak.tokenParsed?.preferred_username);

    console.log("PERSONAL DATA")
    console.log("name", keycloak.tokenParsed?.name);
    console.log("last name", keycloak.tokenParsed?.family_name);
    console.log("first name", keycloak.tokenParsed?.given_name);

    console.log("EMAILING")
    console.log("email", keycloak.tokenParsed?.email);
    console.log("verified email: ", keycloak.tokenParsed?.email_verified)
   
    console.log("REALM ROLES: ", keycloak.tokenParsed?.realm_access);
    if (keycloak.tokenParsed?.realm_access) {
      console.log("is admin ", keycloak.hasRealmRole("ADMIN")); 
      console.log("is user ", keycloak.hasRealmRole("USER")); 
      keycloak.tokenParsed.realm_access.roles.includes('ADMIN') ? console.log(" I am an admin!") : console.log("");
      keycloak.tokenParsed.realm_access.roles.includes('USER') ? console.log(" I am a user!") : console.log("");
      // for (let i = 0; i < keycloak.tokenParsed?.realm_access.roles.length; i++) {
      //   console.log ("no." + i + keycloak.tokenParsed?.realm_access.roles[i]);
      // }
    }


    console.log("SCOPE", keycloak.tokenParsed?.scope);
    // console.log("ROLES", keycloak.tokenParsed?.roles);
    // console.log(keycloak.tokenParsed?.jti);
    // console.log(keycloak.tokenParsed?.sid);
    // console.log(keycloak.tokenParsed?.typ);
    // console.log(keycloak.tokenParsed?.iss);

    // console.log("TOKEN", keycloak.token);
  }
}
