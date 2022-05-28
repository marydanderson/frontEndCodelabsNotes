import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeSummaryComponent } from "./home-summary/home-summary.component";
import { MaintenanceListComponent } from "./maintenance/maintenance-list/maintenance-list.component";
import { EnterHomeComponent } from "./enter-home/enter-home.component";
import { UserHouseMainComponent } from "./user-house-main/user-house-main.component";
import { ProjectListComponent } from "./project/project-list/project-list.component";
import { InspirationComponent } from "./project/inspiration/inspiration.component";
import { WorkBreakdownComponent } from "./project/work-breakdown/work-breakdown.component";
import { ProjectCardComponent } from "./project/project-detail/project-card/project-card.component";
import { FinancialHomeComponent } from "./financials/financial-home/financial-home.component";
import { LoanAmorizationFormComponent } from "./financials/loan-amortization/loan-amorization-form-component";
import { SignUpComponent } from "./authentication/sign-up/sign-up.component";
import { SignInComponent } from "./authentication/sign-in/sign-in.component";
import { AuthGuard } from "./authentication/auth.guard";
import { UserProfileComponent } from "./user/user-profile/user-profile.component";


const appRoutes: Routes = [
  { path: "", redirectTo: "/welcomehome", pathMatch: "full" },
  {
    path: "welcomehome", component: EnterHomeComponent, children: [
      { path: "signup", component: SignUpComponent },
      { path: "login", component: SignInComponent },
    ]
  },
  {
    path: "dashboard", component: UserHouseMainComponent, canActivate: [AuthGuard], children: [
      { path: "user-profile", component: UserProfileComponent },
      { path: "summary", component: HomeSummaryComponent },
      { path: "projects", component: ProjectListComponent },
      { path: "inspiration", component: InspirationComponent},
      { path: "work-breakdown", component: WorkBreakdownComponent},
      { path: "financials", component: FinancialHomeComponent },
      { path: "loan-form", component: LoanAmorizationFormComponent},
      { path: "general", component: ProjectCardComponent },
      { path: "maintenance", component: MaintenanceListComponent },
  ]
  },


]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule{}
