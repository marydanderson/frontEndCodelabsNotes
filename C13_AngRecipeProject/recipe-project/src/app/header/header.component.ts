import { Component, EventEmitter, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() featureSelected = new EventEmitter<string>(); //tells angular to create new event emitter and that tha data it emits is a string
  // @output decorator makes this hearable by the parent component
  constructor() { }

  ngOnInit(): void {
  }

  onSelect(feature: string) { //this funciton raises an event w/ the value of 'recipe' or 'shopping list' to the parent
    console.log(this.featureSelected)
    this.featureSelected.emit(feature);
  }

}
