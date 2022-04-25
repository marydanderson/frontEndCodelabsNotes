import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ParamMap } from '@angular/router';

@Component({
  selector: 'app-project-navbar',
  templateUrl: './project-navbar.component.html',
  styleUrls: ['./project-navbar.component.css']
})
export class ProjectNavbarComponent implements OnInit {
  id: number;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    // get ID for project from routing from parent component
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.id = +params.get('id'); })
  }

}
