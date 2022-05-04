import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from '../authentication/auth.service';
import { ProjectService } from '../project/project.service';



@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit, OnDestroy {
  isAuthenticated = false //default value of page [lockout] if user isn't logged in
  private userSub: Subscription

  isToggleMenuOpen: boolean = false;


  constructor(private authService: AuthService, private projectService: ProjectService) { }

  ngOnInit(): void {
    console.log('navbar' + this.isAuthenticated)
    // subscribe to whether a user is logged in or logged out (logged out via 'log out' button click or token expiration); store to userSub subscription
    this.userSub = this.authService.user.subscribe(user => {
      //user is either 'null' if not logged in, or exists if logged in as an object
      this.isAuthenticated = !user ? false : true; //set user to false if user doesn't exist/is null/not authenticated, else set to true b/c one is created and logged in
    });
  }

  ngOnDestroy(): void {
    //clear subscription for data leaks
    this.userSub.unsubscribe();

  }


}
