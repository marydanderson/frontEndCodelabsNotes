import { Injectable, NgZone } from '@angular/core';
import { User } from './user';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import * as auth from 'firebase/auth'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userData: any; // Save logged in user data

  constructor(
    public afs: AngularFirestore,
    public afAuth: AngularFireAuth,
    public router: Router,
    public ngZone: NgZone // ngZone service to remove outside scope warning
  ) {
    // Saving user data in local strage when logged in and setting up null when logged out
    this.afAuth.authState.subscribe((user) => {
      if (user) {
        this.userData = user;
        localStorage.setItem('user', JSON.stringify(this.userData));
        JSON.parse(localStorage.getItem('user')!);
      } else {
        localStorage.setItem('user', 'null');
        JSON.parse(localStorage.getItem('user')!)
      }
    });
  }


  // Sign in with email/password
  SignIn(email: string, password: string) {
    return this.afAuth
      .signInWithEmailAndPassword(email, password)
      .then((result) => {
        this.ngZone.run(() => {
          this.router.navigate(['dashboard']);
        });
        // Sets the user data/profile info for the logged in user
        this.SetUserData(result.user)
      })
      .catch((error) => {
        window.alert(error.message);
      });
  }

  SignUp(email: string, password: string) {
    return this.afAuth
      .createUserWithEmailAndPassword(email, password)
      .then((result) => {
        // Add user to firebase
        this.SetUserData(result.user)
      })
      .catch((error) => {
        window.alert(error.message)
      })
  }

  // FUTURE ==== Send email verification when new user signs up

  // FUTURE ==== forgot password reset


  // Returns true when user is logged in and *future* ==> email is verified | utilize for Route Guard blocking
  // WHY IS IT GET????
  get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user')!);
    // Return TRUE if user has a value in local storage
    return user !== null;
  }

  // FUTURE Sign in w/ Google
  GoogleAuth() {

  }

  // FUTURE Auth logic to run auth providers





  /* Add user to firebase
  Setting up user data when signed in w/ usernam/password
  sign up with username/passowrd and sign in with social auth provider in Firestore database using AngularFirestore + AngularFirestoreDocument service
  */
  SetUserData(user: any) {
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(
      `users/${user.uid}`
    );
    const userData: User = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
    };
    return userRef.set(userData, {
      merge: true
    })
  }

  // Sign out
  SignOut() {
    return this.afAuth.signOut().then(() => {
      localStorage.removeItem('user');
      this.router.navigate(['sign-in']);
    });
  }

}
