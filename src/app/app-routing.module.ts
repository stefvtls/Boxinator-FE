import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "./guards/auth.guard";
import { HomePage } from "./pages/home/home.page";
import { LoginPage } from "./pages/login/login.page";
import { ProfilePage } from "./pages/profile/profile.page";



const routes: Routes = [
    {
        path: "",
        component: HomePage
    },
    {
        path: "login",
        component: LoginPage
    },
    {
        path: "profile",
        component: ProfilePage,
        canActivate: [AuthGuard]
        
    }
] //routes for the application

@NgModule({
    imports: [RouterModule.forRoot(routes)],    //import module with routs array information
    exports: [RouterModule]     //export module and its features
})
export class AppRoutingModule {

}