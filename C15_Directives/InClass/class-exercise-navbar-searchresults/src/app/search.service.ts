import { EventEmitter, Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchService implements OnInit {

  private searchHistoryArray: string[] = [
    "test serach history 1",
    "test 2"
  ]

  searchHistoryChanged = new EventEmitter<string[]>();

    constructor() { }

    ngOnInit() {
      return this.searchHistoryArray.slice();
    }



  //Read all of the search history items
  getSearches() {
    return this.searchHistoryArray.slice();
  }


  //add new search item to array
  addSearch(submittedSearchItem: string) {
     this.searchHistoryArray.push(submittedSearchItem)
     this.searchHistoryChanged.emit(this.searchHistoryArray.slice())

  }

}
