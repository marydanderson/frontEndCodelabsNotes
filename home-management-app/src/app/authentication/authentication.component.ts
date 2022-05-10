import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { AuthResponseData } from './auth.service';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent implements OnInit {
  loginMode = '';
  isLoading = false; //to show/hide loading spinner component
  error: string = null; //to show/hide error
  loginSuccessMessage: string = '';
  authSubmittedSuccess = false;


  constructor(private route: ActivatedRoute, private authService: AuthService, private router: Router) { }

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
        if (this.error) this.error = null;
        this.router.navigate(['user-house/summary'])
      },
        (err) => {
          console.log('Auth sign in error: ', err)
        }
      );
    } else {
      // Sign up logic
      this.authService.signup(email, password).subscribe(resData => {
        console.log('Auth sign up response:', resData)
        if (this.error) this.error = null;
        this.router.navigate(['user-house/summary'])
      },
        (err) => {
          console.error('Auth response error: ', err);
        }
      )
    }
    // //Message Alerts:
    // this.loginSuccessMessage = 'Welcome home!';


    // authObservable.subscribe(
    //   resData => {
    //     this.authSubmittedSuccess = true;
    //     console.log(resData);
    //     this.isLoading = false;
    //     // this.router.navigate(['/homesummary']) //when user is logged in and authenticated, route them to home page
    //   },
    //   errorMessage => {
    //     console.log(errorMessage);
    //     this.error = errorMessage;
    //     this.isLoading = false;
    //   }
    // )
    form.reset()
  }

  // close out alert box from alert component stating you've been logged in; REF alert.component
  onHandleSucces() {
    this.authSubmittedSuccess = false;
  }

}
