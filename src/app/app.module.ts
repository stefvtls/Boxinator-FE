import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenRefreshHttpInterceptor } from './interceptors/token-refresh-http.interceptor';
import { TokenAuthHttpInterceptor } from './interceptors/token-auth-http.interceptor';

import { AppComponent } from './app.component';
import { LoginPage } from './pages/login/login.page';
import { ProfilePage } from './pages/profile/profile.page';
import { AdminPage } from './pages/admin/admin.page';
import { NavbarComponent } from './navigation/navbar/navbar.component';




@NgModule({
  declarations: [ // components visible to the app
    AppComponent,
    LoginPage,
    ProfilePage,
    AdminPage,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
     {      // Check Token Before each request and if is expired, refresh it
      provide: HTTP_INTERCEPTORS,
      useClass: TokenRefreshHttpInterceptor,
      multi: true,
    },
    {      // If user authenticated attach a bearer token to the request, otherwise send without token
      provide: HTTP_INTERCEPTORS,
      useClass: TokenAuthHttpInterceptor,
      multi: true
    }

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
