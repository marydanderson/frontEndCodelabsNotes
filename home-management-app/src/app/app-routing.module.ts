import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeSummaryComponent } from "./home-summary/home-summary.component";
import { MaintenanceListComponent } from "./maintenance/maintenance-list/maintenance-list.component";
import { AuthenticationComponent } from "./authentication/authentication.component";
import { EnterHomeComponent } from "./enter-home/enter-home.component";
import { UserHouseMainComponent } from "./user-house-main/user-house-main.component";
import { ProjectListComponent } from "./project/project-list/project-list.component";
import { InspirationComponent } from "./project/inspiration/inspiration.component";
import { WorkBreakdownComponent } from "./project/work-breakdown/work-breakdown.component";
import { ProjectFinancialsComponent } from "./project/project-detail/project-financials/project-financials.component";
import { ProjectCardComponent } from "./project/project-detail/project-card/project-card.component";
import { AuthGuard } from "./authentication/authguard/authguard.component";


const appRoutes: Routes = [
  {
    path: "welcomehome", component: EnterHomeComponent, children: [
      { path: "signup", component: AuthenticationComponent },
      { path: "login", component: AuthenticationComponent },
    ]
  },
  {
    path: "user-house", component: UserHouseMainComponent, canActivate: [AuthGuard], children: [

      { path: "summary", component: HomeSummaryComponent },
      { path: "projects", component: ProjectListComponent },
      { path: "inspiration", component: InspirationComponent},
      { path: "work-breakdown", component: WorkBreakdownComponent},
      { path: "financials", component: ProjectFinancialsComponent},
      { path: "general", component: ProjectCardComponent }
  ]},
  { path: "", redirectTo: "/welcomehome", pathMatch: "full" },
  { path: "maintenance", component: MaintenanceListComponent },

]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule{}
