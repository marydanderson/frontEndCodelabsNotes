import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from '../authentication/auth.service';

@Component({
  selector: 'app-user-house-main',
  templateUrl: './user-house-main.component.html',
  styleUrls: ['./user-house-main.component.css']
})
export class UserHouseMainComponent {

  isAuthenticated = false;

  constructor(private authService: AuthService) { }



}
