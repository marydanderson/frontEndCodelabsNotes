import { Component, Injectable, OnInit } from '@angular/core';
import { DESSERTS } from '../mock-dessert-database';



@Component({
  selector: 'app-dessert-list',
  templateUrl: './dessert-list.component.html',
  styleUrls: ['./dessert-list.component.css']
})
export class DessertListComponent implements OnInit {
  desserts = DESSERTS;
  constructor() { }

  ngOnInit(): void {
  }

}
