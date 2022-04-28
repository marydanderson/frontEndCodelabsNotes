import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeSummaryComponent } from "./home-summary/home-summary.component";
import { MaintenanceListComponent } from "./maintenance/maintenance-list/maintenance-list.component";
import { ProjectListComponent } from "./project/project-list/project-list.component";
import { ProjectDetailComponent } from "./project/project-detail/project-detail.component";
import { ProjectFormComponent } from "./project/project-form/project-form.component";
import { NewProjectSubmissionComponent } from "./project/project-form/new-project-submission/new-project-submission.component";
import { InspirationComponent } from "./project/inspiration/inspiration.component";
import { WorkBreakdownComponent } from "./project/work-breakdown/work-breakdown.component";
import { ProjectFinancialsComponent } from "./project/project-detail/project-financials/project-financials.component";
import { ProjectCardComponent } from "./project/project-detail/project-card/project-card.component";


const appRoutes: Routes = [
  { path: "project-details/:id", component: ProjectDetailComponent, children: [
    { path: "inspiration", component: InspirationComponent},
    { path: "work-breakdown", component: WorkBreakdownComponent},
    { path: "financials", component: ProjectFinancialsComponent},
    { path: "general", component: ProjectCardComponent}
  ]},
  { path: "", redirectTo: "/homesummary", pathMatch: "full" },
  { path: "homesummary", component: HomeSummaryComponent},
  { path: "maintenance", component: MaintenanceListComponent },
  { path: "projects", component: ProjectListComponent, children:
    [
    ]
  },
  {path: "add-new-project", component: ProjectFormComponent,
  children: [
    {path: "project-submission", component: NewProjectSubmissionComponent}
  ]}
]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule{}
