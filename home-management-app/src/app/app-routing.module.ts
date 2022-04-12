import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeSummaryComponent } from "./home-summary/home-summary.component";
import { MaintenanceListComponent } from "./maintenance/maintenance-list/maintenance-list.component";
import { ProjectItemComponent } from "./project/project-item/project-item.component";
import { ProjectListComponent } from "./project/project-list/project-list.component";



const appRoutes: Routes = [
  //homepage path
  { path: "", redirectTo: "/homesummary", pathMatch: "full" },
  { path: "homesummary", component: HomeSummaryComponent},
  { path: "maintenance", component: MaintenanceListComponent },
  {
    path: "projects", component: ProjectListComponent,
    children: [
      {path: "", component: ProjectItemComponent}
    ]
  },
]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule{}
