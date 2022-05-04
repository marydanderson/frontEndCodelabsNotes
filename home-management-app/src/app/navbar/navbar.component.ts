import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { DropdownDirective } from '../shared/dropdown.directive';
import { ClickOutsideDirective } from 'ng-click-outside';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit {

  isToggleMenuOpen: boolean = false;

  clickedOutside() {
    this.isToggleMenuOpen = false;
  }

  constructor() { }

  ngOnInit(): void {

  }


}
