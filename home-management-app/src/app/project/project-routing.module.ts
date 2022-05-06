import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { InspirationComponent } from "./inspiration/inspiration.component";
import { ProjectCardComponent } from "./project-detail/project-card/project-card.component";
import { ProjectDetailComponent } from "./project-detail/project-detail.component";
import { ProjectFinancialsComponent } from "./project-detail/project-financials/project-financials.component";
import { NewProjectSubmissionComponent } from "./project-form/new-project-submission/new-project-submission.component";
import { ProjectFormComponent } from "./project-form/project-form.component";
import { ProjectListComponent } from "./project-list/project-list.component";
import { WorkBreakdownComponent } from "./work-breakdown/work-breakdown.component";

const projectRoutes: Routes = [
  { path: "projects", component: ProjectListComponent},
  { path: "project-details/:id", component: ProjectDetailComponent, children: [
    { path: "inspiration", component: InspirationComponent},
    { path: "work-breakdown", component: WorkBreakdownComponent},
    { path: "financials", component: ProjectFinancialsComponent},
    { path: "general", component: ProjectCardComponent }]
  },
  {path: "add-new-project", component: ProjectFormComponent, children: [
    {path: "project-submission", component: NewProjectSubmissionComponent}
  ]
  }
]


@NgModule({
  imports: [RouterModule.forChild(projectRoutes)],
  exports: [RouterModule]
})

export class ProjectRoutingModule{ }

