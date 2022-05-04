import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { AuthResponseData } from './auth.service';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent implements OnInit {
  // is user in login or signup mode:
  loginMode = '';
  isLoading = false; //to show/hide loading spinner component
  error: string = null; //to show/hide error


  constructor(private route: ActivatedRoute, private authService: AuthService) { }

  ngOnInit(): void {

    // Does URL have signup or log in input ted? params = signup or login
    this.route.params.subscribe( params => {
      this.loginMode = params['authState'];
      console.log(this.loginMode)
    })
  }

  clearFormViewChange(form: NgForm) {

    form.reset()
  }


  onSubmitAuth(form: NgForm) {
    if (!form.valid) {
      return;
    }
    const email = form.value.email;
    const password = form.value.password;

    // change status of loading to utlize loading spinner
    this.isLoading = true

    let authObservable: Observable<AuthResponseData>;

    if (this.loginMode === 'login') {
      // LOGIN
      authObservable = this.authService.login(email, password)
    } else { // SIGNUP
      // send sign in values to be authenticated in service
      authObservable = this.authService.signup(email, password);
    }

    authObservable.subscribe(
      resData => {
        console.log(resData);
        this.isLoading = false
      },
      errorMessage => {
        console.log(errorMessage);
        this.error = errorMessage;
        this.isLoading = false;
      }
    )
    form.reset()
  }

}
