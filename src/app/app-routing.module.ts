import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "./guards/auth.guard";
import { RoleGuard } from "./guards/role.guard";
import { AdminPage } from "./pages/admin/admin.page";
import { HomePage } from "./pages/home/home.page";
import { LoginPage } from "./pages/login/login.page";
import { PlaceOrderPage } from "./pages/place-order/place-order.page";
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
        path: "place-order",
        component: PlaceOrderPage
    },
    {
        path: "profile",
        component: ProfilePage,
        canActivate: [AuthGuard]
    },
    {
        path: "admin/dashboard",
        component: AdminPage,
        canActivate: [RoleGuard],
        data: {
            realmRole: "ADMIN"
          } 
    }
] //routes for the application

@NgModule({
    imports: [RouterModule.forRoot(routes)],    //import module with routs array information
    exports: [RouterModule]     //export module and its features
})
export class AppRoutingModule {

}