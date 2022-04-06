import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @Output() newSearchItemEvent = new EventEmitter<string>();
  mySearch: string = "beta";

  constructor() { }

  ngOnInit(): void {
  }

  newSearchItem(value: string) {
    this.newSearchItemEvent.emit(this.mySearch)
  }

}
