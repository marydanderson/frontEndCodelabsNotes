import { Component, Injectable, OnInit } from '@angular/core';
import { DESSERTS } from '../mock-dessert-database';


@Component({
  selector: 'app-dessert-detail',
  templateUrl: './dessert-detail.component.html',
  styleUrls: ['./dessert-detail.component.css']
})
export class DessertDetailComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  displayDessertDetail() {

  }

}
