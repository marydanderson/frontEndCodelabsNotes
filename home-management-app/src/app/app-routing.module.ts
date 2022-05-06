import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeSummaryComponent } from "./home-summary/home-summary.component";
import { MaintenanceListComponent } from "./maintenance/maintenance-list/maintenance-list.component";
import { AuthenticationComponent } from "./authentication/authentication.component";
import { EnterHomeComponent } from "./enter-home/enter-home.component";


const appRoutes: Routes = [
  { path: "welcomehome", component: EnterHomeComponent},
  { path: "", redirectTo: "/welcomehome", pathMatch: "full" },
  { path: "homesummary", component: HomeSummaryComponent},
  { path: "maintenance", component: MaintenanceListComponent },
  { path: "signup", component: AuthenticationComponent},
  { path: "login", component: AuthenticationComponent},
  { path: "auth/:authState", component: AuthenticationComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule{}
