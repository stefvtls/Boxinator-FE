import { Component } from '@angular/core';
import { Router } from '@angular/router';
import keycloak from 'src/keycloak';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor(private readonly router: Router) {}

  get authenticatedUser(): boolean | undefined {
    return keycloak.authenticated;
  }

  get adminRole(): boolean | undefined {
    const { adminRole } = environment;
    return keycloak.hasRealmRole(adminRole);
  } 


  // logs out the current trainer by resetting the trainer data in TrainerService and navigates to login page
  handleLogOut() {
    keycloak.logout();
    // this.trainerService.trainer = undefined;
    // this.trainerService.clearTrainer();
    // this.router.navigateByUrl("/login");
  }


}
