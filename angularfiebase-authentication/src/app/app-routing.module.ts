import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { ForgotPasswordComponent } from "./forgot-password/forgot-password.component";
import { SignInComponent } from "./sign-in/sign-in.component";
import { VerifyEmailComponent } from "./verify-email/verify-email.component";
import { AuthGuard } from "./shared/guard/auth.guard";
import { SignUpComponent } from "./sign-up/sign-up.component";



const appRoutes: Routes = [
  { path: '', redirectTo: '/sign-in', pathMatch: 'full' },
  { path: 'sign-in', component: SignInComponent },
  { path: 'register-user', component: SignUpComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard]},
  { path: 'forgot-passwored', component: ForgotPasswordComponent, canActivate: [AuthGuard] },
  {path: 'verify-email-address', component: VerifyEmailComponent, canActivate: [AuthGuard]}
]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule{}
