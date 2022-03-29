import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'input-event-binding-exercise';
  header: string = "inputvalue";

  submitInput(event: any) {
    console.log("something has been inputed!")
    console.log(event);
    this.header = event.target.value;
  }
}
