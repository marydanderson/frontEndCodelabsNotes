import { Component, OnInit } from '@angular/core';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  searchInput: string = "df";

  constructor(private inputSearchService: SearchService) { }

  ngOnInit(): void {

  }


  addSearchToHistory(searchInput: string) {
    console.log(searchInput)
    return this.inputSearchService.addSearch(searchInput)
  }

}
