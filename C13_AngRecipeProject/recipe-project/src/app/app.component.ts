import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'recipe-project';
  loadedFeature = 'recipe'; //in nav bar, for nav bar page change b/t recipe and other header links

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }
}
