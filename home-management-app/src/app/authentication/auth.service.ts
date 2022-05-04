import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';
import { Subject } from 'rxjs';
import { catchError } from 'rxjs';
import { throwError } from 'rxjs';
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

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user = new Subject<User>(); //emit (next) new user whenever we have one (login) or when we logout (clear, logout, or token expired)
  // currentUser = new User('test@test.com', '5', "",new Date())
  currentUser = null;

  constructor(private http: HttpClient) { } //

  // sign user up by sending request to signup URL at Firebase
  signup(email: string, password: string) {
    // return so it can be subscribed to
    return this.http.post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBOPeZL5QVUCkGtnEE4-KbJl6r2fS2dZ5o',
      // pass in  properties required by Database = email, password, returnSecureToken
      // https://firebase.google.com/docs/reference/rest/auth/#section-create-email-password
      {
        email: email,
        password: password,
        returnSecureToken: true  //should always be true, per firebase docs
      }
      // format and return errors that can be generated to show in the DOM; pipe is w/ rxjx and return observable
    ).pipe(catchError(this.handleError), tap(responseData => {  //tap runs code w/ data from observable, but doesn't mutate it
      this.handleAuth(responseData.email, responseData.localId, responseData.refreshToken, +responseData.expiresIn)
    }))
  };

  // existing user login; http request to firebase
  login(email: string, password: string) {
    return this.http.post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBOPeZL5QVUCkGtnEE4-KbJl6r2fS2dZ5o',
      // pass in  properties required by Database = email, password, returnSecureToken
      {
        email: email,
        password: password,
        returnSecureToken: true  //should always be true, per firebase docs
      }
    ).pipe(catchError(this.handleError), tap(responseData => {  //tap runs code w/ data from observable, but doesn't mutate it
      this.handleAuth(responseData.email, responseData.localId, responseData.refreshToken, +responseData.expiresIn)
    }))
  };

  private handleAuth(email: string, userId: string, token: string, expiresIn: number) {
    const expirationDate = new Date //convert exp date in ms to concrete time stamp / Date object
      (new Date().getTime() + expiresIn * 1000); //current date in ms + firebase ID token expiration time 3600 sec | gives exp date in MS,
    const user = new User( // set user w/ data from server
      email,
      userId,
      token,
      expirationDate
    );
    this.user.next(user) //emit this User as the currently logged in user
  }

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
