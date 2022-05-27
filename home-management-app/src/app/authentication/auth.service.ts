import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, tap } from 'rxjs';
import { catchError } from 'rxjs';
import { throwError } from 'rxjs';
import { UserService } from '../user/user.service';
import { User } from './user.model';

// define format of data we get from Firebase ; defines how auth response data will look like
// this step is optional , but gives a hint of what the data needs to look like/good for reference; look at 'response payload' on firebase documentation
export interface AuthResponseData {
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
  registered?: boolean; //required for log in
}

const SIGN_UP_URL: string = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=';
const SIGN_IN_URL: string = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=';
const AUTH_API_KEY: string = 'AIzaSyBOPeZL5QVUCkGtnEE4-KbJl6r2fS2dZ5o';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // user = new Subject<User>(); //emit (next) new user whenever we have one (login) or when we logout (clear, logout, or token expired);
  // BEHAVIOR SUBJECTS give subscribers IMMEIDATE access to the previously emitted value, even if they haven't been subscribed at the point in time that value was emitted
  currentUser = new BehaviorSubject<User>(null); //emit (next) new user whenever we have one (login) or when we logout (clear, logout, or token expired);

  userToken: string = null; //get token to feed back to project/data fetching services so data can be fetched from Firebase when a user is authenticated/token created

  constructor(private http: HttpClient, private router: Router, private userService: UserService) { } //

  // sign user up by sending request to signup URL at Firebase
  // signup(email: string, password: string) {
  //   return this.http.post(SIGN_UP_URL + AUTH_API_KEY, {
  //     email: email,
  //     password: password,
  //     returnSecureToken: true,
  //   })
  //     .pipe(
  //       tap((res: AuthResponseData) => {
  //       // Use Obj Destructurting to get access to all response values
  //         console.log(res)
  //         const { email, localId, idToken, expiresIn } = res
  //         this.handleAuth(email, localId, idToken, +expiresIn)
  //     })
  //   );
  // }

  // USER DATA ATTEMP
  signup(email: string, password: string) {
    return this.http.post(SIGN_UP_URL + AUTH_API_KEY, {
      email: email,
      password: password,
      returnSecureToken: true,
    })
      .pipe(
        tap((res: AuthResponseData) => {
        // Use Obj Destructurting to get access to all response values
          console.log(res)
          const { email, localId, idToken, expiresIn } = res
          this.handleAuth(email, localId, idToken, +expiresIn)
      })
    );
  }




  // existing user login; http request to firebase
  login(email: string, password: string) {
    return this.http.post<AuthResponseData>(SIGN_IN_URL+AUTH_API_KEY,
      // pass in  properties required by Database = email, password, returnSecureToken
      {
        email: email,
        password: password,
        returnSecureToken: true  //should always be true, per firebase docs
      }
    ).pipe(catchError(this.handleError), tap(responseData => {  //tap runs code w/ data from observable, but doesn't mutate it
      const { email, localId, idToken, expiresIn } = responseData;
      this.handleAuth(email, localId, idToken, +expiresIn)
      console.log(responseData)
    }))
  };

  // Sign Out
  signOut() {
    this.currentUser.next(null);
    this.router.navigate(['welcomehome']);
  }

  private handleAuth(email: string, userId: string, token: string, expiresIn: number) {
    const expirationDate = new Date //convert exp date in ms to concrete time stamp / Date object
      (new Date().getTime() + expiresIn * 1000); //current date in ms + firebase ID token expiration time 3600 sec | gives exp date in MS,
    const formUser = new User( // set user w/ data from server
      email,
      userId,
      token,
      expirationDate
    );

    this.currentUser.next(formUser) //emit this User as the currently logged in user;
    this.userService.addUserToDatabase(formUser);

    // Save new user in localStorage
    localStorage.setItem("userData", JSON.stringify(formUser))
  }


  //NEED TO UTILIZE CODE BELOW

  private handleError(errorRes: HttpErrorResponse) {
    // Default error message:
    let errorMessage = 'an unknown error occured'
    // give scenario in case on network where you can't access error message TYP done in Firebase
    if (!errorRes.error || !errorRes.error.error) {
      return throwError(errorMessage);
    }
    switch (errorRes.error.error.message) {
      case 'EMAIL_EXISTS':
        errorMessage = 'This email already exists!';
        break; ``
      case 'EMAIL_NOT_FOUND':
        errorMessage = 'This email does not exist.';
        break;
      case 'INVALID_PASSWORD':
        errorMessage = 'Invalid Password'
    }
    return throwError(errorMessage)
  }
}
