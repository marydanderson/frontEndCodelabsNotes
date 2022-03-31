import { Component, Injectable, OnInit, Output, EventEmitter } from '@angular/core';
import { DESSERTS } from '../mock-dessert-database';



@Component({
  selector: 'app-dessert-list',
  templateUrl: './dessert-list.component.html',
  styleUrls: ['./dessert-list.component.css']
})

export class DessertListComponent implements OnInit {
  @Output() dessertSelected = new EventEmitter <string>(); //tells angular to create new event emitter and that tha data it emits is a string


  desserts = DESSERTS;
  constructor() { }

  ngOnInit(): void {
  }

  onSelect(feature: string) {
    console.log(this.dessertSelected);
    this.dessertSelected.emit(feature);
  }

}
