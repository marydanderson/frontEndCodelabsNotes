import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './users/users.component';


const appRoutes: Routes = [
  { path: "", redirectTo: "/users", pathMatch: "full" },
  { path: "users/:id", component: UsersComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
