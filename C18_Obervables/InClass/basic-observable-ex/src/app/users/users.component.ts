import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users = [];
  name: string='here';

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    console.log(this.route);
    this.route.params.subscribe(data => {
      console.log(data['id'])

    });

  }

}
