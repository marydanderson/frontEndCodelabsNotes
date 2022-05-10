import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from '../authentication/auth.service';

@Component({
  selector: 'app-home-summary',
  templateUrl: './home-summary.component.html',
  styleUrls: ['./home-summary.component.css']
})
export class HomeSummaryComponent implements OnInit, OnDestroy {
  isAuthenticated = false //default value of page [lockout] if user isn't logged in
  private userSub: Subscription;

  constructor(private authSerivce: AuthService) { }

  ngOnInit(): void {
    console.log(this.isAuthenticated)
    this.isAuthenticated = !this.authSerivce.currentUser ? false : true; //set user to false if user doesn't exist/is null/not authenticated, else set to true b/c one is created and logged in

    // subscribe to whether a user is logged in or logged out (logged out via 'log out' button click or token expiration); store to userSub subscription
    this.userSub = this.authSerivce.currentUser.subscribe(user => {
      //user is either 'null' if not logged in, or exists if logged in as an object
      this.isAuthenticated = !user ? false : true; //set user to false if user doesn't exist/is null/not authenticated, else set to true b/c one is created and logged in
    });
  }


  ngOnDestroy(): void {
    this.userSub.unsubscribe();
  }

}
