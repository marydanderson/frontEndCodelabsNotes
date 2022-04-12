import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../project.service';
import { Project } from '../project-item/project.model';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {
  projectList: Project[] = [];

  constructor(
    private projectService: ProjectService,
    private router: Router,
    private route: ActivatedRoute
    ) { }

  ngOnInit() {
    this.getProjects()
  }

  getProjects() {
    this.projectList = this.projectService.getProjects()
  }

  getProjectDetail() {
    this.router.navigate(['project-details'], {relativeTo: this.route})
  }

}
