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
  private userSub: Subscription

  isToggleMenuOpen: boolean = false;
  isAuthenticated = false;


  constructor(private authService: AuthService, private projectService: ProjectService) { }

  ngOnInit(): void {
    // When user is created/authenticated, make this component accessible
    this.authService.currentUser.subscribe((user) => {
      this.isAuthenticated = !!user;
    })
  }

  ngOnDestroy(): void {
    this.authService.currentUser.unsubscribe();

  }


}
