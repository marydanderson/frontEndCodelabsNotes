import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-enter-home',
  templateUrl: './enter-home.component.html',
  styleUrls: ['./enter-home.component.css']
})
export class EnterHomeComponent implements OnInit {
  isLoginMode = false;
  isSignupMode = false;

  constructor() { }

  ngOnInit(): void {
  }

  onLoginClick() {

    this.isLoginMode = !this.isLoginMode
  }

  onSignupClick() {

    this.isSignupMode = !this.isSignupMode

  }

}
