import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from '../authentication/auth.service';

@Component({
  selector: 'app-user-house-main',
  templateUrl: './user-house-main.component.html',
  styleUrls: ['./user-house-main.component.css']
})
export class UserHouseMainComponent implements OnInit, OnDestroy {

  isAuthenticated = false;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    // Check to see if user is authenticated; if they are, show this component and children
    this.authService.currentUser.subscribe((user) => {
      this.isAuthenticated = !!user;
    })
  }

  ngOnDestroy(): void {
    this.authService.currentUser.unsubscribe()

  }

}
