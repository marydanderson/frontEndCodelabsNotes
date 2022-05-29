import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/authentication/auth.service';
import { User } from '../user';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  userLoggedIn: User = {
    uid: '',
    email: '',
    displayName: '',
    photoURL: '',
  }

  editClicked: boolean = true;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.onUserDataChange();
  }

  onUserDataChange() {
    this.authService.dataObsevable.subscribe((dataChange) => {
      this.userLoggedIn = dataChange;
    })
  }

  toggleEditProfile() {
    this.editClicked = false;
    console.log('edit clicked toggle', this.editClicked)
  }

}
