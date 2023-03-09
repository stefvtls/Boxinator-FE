import { Component } from '@angular/core';
import keycloak from 'src/keycloak';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.css']
})
export class ProfilePage {
  handleLogout(){
    keycloak.logout();
   }

  handleDisplayToken() {
    console.log("USER/SUB ID");
    console.log("userID", keycloak.tokenParsed?.sub);
    console.log("username", keycloak.tokenParsed?.preferred_username);

    console.log("PERSONAL DATA")
    console.log("?name", keycloak.tokenParsed?.name);
    console.log("last name", keycloak.tokenParsed?.family_name);
    console.log("first name", keycloak.tokenParsed?.given_name);

    console.log("EMAILING")
    console.log("email", keycloak.tokenParsed?.email);
    console.log("verified email: ", keycloak.tokenParsed?.email_verified)
   
    console.log("ROLES",keycloak.tokenParsed?.roles );
    console.log("SCOPE", keycloak.tokenParsed?.scope);

    console.log(keycloak.tokenParsed?.jti);
    console.log(keycloak.tokenParsed?.sid);
    console.log(keycloak.tokenParsed?.typ);
    console.log(keycloak.tokenParsed?.iss);

    console.log("TOKEN", keycloak.token);
  }


}
