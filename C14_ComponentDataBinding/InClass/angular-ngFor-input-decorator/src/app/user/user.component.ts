import { Component, Input, OnInit } from '@angular/core';
import { User } from '../user.model';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  @Input() inputUser: User
  constructor() { }

  ngOnInit(): void {
  }

}
