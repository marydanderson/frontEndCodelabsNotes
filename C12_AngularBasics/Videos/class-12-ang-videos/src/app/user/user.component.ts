import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  username="username";
  contentStatus = false;
  log =[];


  constructor() { }

  ngOnInit(): void {
  }

  onDisplayDetails(){
    this.contentStatus = !this.contentStatus;
    this.log.push(this.log.length+1)
  }

}
