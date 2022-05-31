import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from '../authentication/auth.service';

@Component({
  selector: 'app-home-summary',
  templateUrl: './home-summary.component.html',
  styleUrls: ['./home-summary.component.css']
})
export class HomeSummaryComponent implements OnInit{
  isAuthenticated = false //default value of page [lockout] if user isn't logged in


  constructor(private authSerivce: AuthService) { }

  ngOnInit(): void {

  }


  ngOnDestroy(): void {

  }

}
