import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../authentication/user.model';



@Injectable({
  providedIn: 'root'
})

export class UserService {

  constructor(private http: HttpClient) { }

// // Add user to Firebase database
//   addUserToDatabase(user: UserData) {
//     this.http.post('https://house-management-91707-default-rtdb.firebaseio.com/users.json',
//       user
//     ).subscribe(responseData => console.log('add user database', responseData))
//   }

  // Add user to Firebase database W/ CLI FIREBASE
  addUserToDatabase(user: User) {
    this.http.post('https://house-management-91707-default-rtdb.firebaseio.com/users.json',
      user
    ).subscribe(responseData => console.log('add user database', responseData))
    // this.firestore.collection('Users').add(user)
  }


}
