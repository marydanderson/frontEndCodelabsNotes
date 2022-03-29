import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'basic-ngif-exercise';
  // EXERCISE 6
  isShow: boolean = true;


  // EXERCISE 7
  isShowContent: boolean = true;

  onShowContent() {
    this.isShowContent = !this.isShowContent;
  }
  // EXERCISE 8 & 9
  myColor: string = "green";
  changeColor: string = "green";

  // EXERCISE 10
  foods: string[] = [
    'donuts',
    'bacon',
    'eggs',
    'melon'
  ]

}
