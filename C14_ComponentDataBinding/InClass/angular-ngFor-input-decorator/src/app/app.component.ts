import { Component } from '@angular/core';
import { User } from './user.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-ngFor-input-decorator';
  users: User[] = [
    {name: 'Mary', id: 1},
    {name: 'Ryan', id: 2}
  ]

}
