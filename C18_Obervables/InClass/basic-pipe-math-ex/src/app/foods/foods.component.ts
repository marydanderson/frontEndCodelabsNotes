import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-foods',
  templateUrl: './foods.component.html',
  styleUrls: ['./foods.component.css']
})
export class FoodsComponent implements OnInit {
  foodSearch: string = "";

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe( data => {
      this.foodSearch = data['search']
      console.log(this.foodSearch)
    })
  }

}


// constructor(private route: ActivatedRoute) { }

// ngOnInit(): void {
//   console.log(this.route);
//   this.route.params.subscribe(data => {
//     console.log(data['id'])

//   });
// }
