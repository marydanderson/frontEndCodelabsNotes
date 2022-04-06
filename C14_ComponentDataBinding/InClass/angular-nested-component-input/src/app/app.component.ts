import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-nested-component-input';
  myPosts: string[] = [
    'Post 1 la',
    'Post 2 as;fkjad;fkja;dfjad',
    'Post 3 adfieiiiie'
  ]
}
