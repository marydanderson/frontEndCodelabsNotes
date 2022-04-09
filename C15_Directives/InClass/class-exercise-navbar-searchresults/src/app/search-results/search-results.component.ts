import { Component, OnInit } from '@angular/core';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {
  searchResultArray: string[] = [];

  constructor(private searchService: SearchService) { }

  ngOnInit(): void {
    this.searchResultArray = this.searchService.getSearches();
    //listen for changes to the global searches array in the service and update the list
    this.searchService.searchHistoryChanged.subscribe((searches: string[]) => {
      this.searchResultArray = searches;
    })
  }

}
