import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MaintenanceItemComponent } from './maintenance/maintenance-item/maintenance-item.component';
import { MaintenanceListComponent } from './maintenance/maintenance-list/maintenance-list.component';
import { FinancialSummaryComponent } from './financials/financial-summary/financial-summary.component';
import { RoomCarouselComponent } from './rooms/room-carousel/room-carousel.component';
import { ProjectWishComponent } from './project/project-wish/project-wish.component';
import { HomeSummaryComponent } from './home-summary/home-summary.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { AuthenticationComponent } from './authentication/authentication.component';
import { ProjectModule } from './project/project.module';
import { RoomsModule } from './rooms/rooms-module';
import { SharedModule } from './shared/shared.module';
import { EnterHomeComponent } from './enter-home/enter-home.component';
import { UserHouseMainComponent } from './user-house-main/user-house-main.component';
import { AuthInterceptorService } from './authentication/auth-interceptor.service';
import { UserComponent } from './user/user.component';
import { LoanAmorizationFormComponent } from './financials/loan-amortization/loan-amorization-form-component';

// Firebase
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from 'src/environments/environment';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';

import { LoanDetailsComponent } from './financials/loan-amortization/loan-details/loan-details.component';
import { FinancialHomeComponent } from './financials/financial-home/financial-home.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MaintenanceItemComponent,
    MaintenanceListComponent,
    FinancialSummaryComponent,
    RoomCarouselComponent,
    ProjectWishComponent,
    HomeSummaryComponent,
    AuthenticationComponent,
    EnterHomeComponent,
    UserHouseMainComponent,
    LoanAmorizationFormComponent,
    UserComponent,
    LoanDetailsComponent,
    FinancialHomeComponent,
  ],
  imports: [
    BrowserModule, //browser module can only be imported once
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule, //required for reactive form approach
    HttpClientModule,
    ProjectModule,
    RoomsModule,
    SharedModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
