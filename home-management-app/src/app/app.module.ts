import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MaintenanceItemComponent } from './maintenance/maintenance-item/maintenance-item.component';
import { MaintenanceListComponent } from './maintenance/maintenance-list/maintenance-list.component';
import { ProjectListComponent } from './project/project-list/project-list.component';
import { FinancialSummaryComponent } from './financials/financial-summary/financial-summary.component';
import { RoomComponent } from './rooms/room/room.component';
import { RoomCarouselComponent } from './rooms/room-carousel/room-carousel.component';
import { ProjectWishComponent } from './project/project-wish/project-wish.component';
import { HomeSummaryComponent } from './home-summary/home-summary.component';
import { AppRoutingModule } from './app-routing.module';
import { ProjectDetailComponent } from './project/project-detail/project-detail.component';
import { ProjectCreateComponent } from './project/project-create/project-create.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MaintenanceItemComponent,
    MaintenanceListComponent,
    ProjectListComponent,
    ProjectDetailComponent,
    FinancialSummaryComponent,
    RoomComponent,
    RoomCarouselComponent,
    ProjectWishComponent,
    HomeSummaryComponent,
    ProjectCreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // FormsModule required for template driven form approach
    ReactiveFormsModule //required for reactive form approach
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
