import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { UserService } from '../user/user.service';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent implements OnInit {
  loginMode = '';
  isLoading = false; //to show/hide loading spinner component
  error: string = null; //to show/hide error
  alertMessage: string = '';
  authError = false;
  authSuccess = false;


  constructor(private route: ActivatedRoute, private authService: AuthService, private router: Router, private userService: UserService) { }

  ngOnInit(): void {
    this.loginMode = (this.router.url.split('/').pop())
    console.log(this.loginMode)

  }

  clearFormViewChange(form: NgForm) {
    form.reset()
  }

  onSubmitAuth(form: NgForm) {
    // Validation check
    if (!form.valid) {
      return;
    }
    // Destricture formi input values
    const { email, password } = form.value;
    // Conditional - check if in signup or login mode
    if (this.loginMode === 'login') {
      // Sign in logic
      this.authService.login(email, password).subscribe(resData => {
        console.log('Auth Sign in Response: ', resData);
        this.alertBoxSuccess();
        if (this.error) this.error = null;
        // this.router.navigate(['user-house/summary'])
      },
        (err) => {
          console.log('Auth sign in error: ', err)
          this.alertMessage = err;
          this.alertBoxError();
        }
      );
    } else {
      // Sign up logic;
      this.userService.addUserToDatabase(email);
      this.authService.signup(email, password).subscribe(resData => {
        console.log('Auth sign up response:', resData)
        if (this.error) this.error = null;
        this.router.navigate(['user-house/summary'])
      },
        (err) => {
          this.alertMessage = err;
          this.alertBoxError();
          console.error('Auth response error: ', err);
        }
      )
    }

    form.reset()
  }

  alertBoxError() {
    this.authError = true;
  }

  alertBoxSuccess() {
    this.authSuccess = true;
    this.alertMessage = 'Success! Welcome Home'
  }

  // close out alert box from alert component stating you've been logged in; REF alert.component
  onHandleSucces() {
    this.authSuccess = false;
    this.router.navigate(['user-house/summary'])
  }

  onHandleAlertErr() {
    this.authError = false;
  }

}
