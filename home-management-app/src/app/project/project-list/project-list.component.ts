import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../project.service';
import { Project } from '../project-detail/project.model';
import { ActivatedRoute, ParamMap } from '@angular/router';


@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {
  projectList: Project[] = [];
  id: number;


  constructor(
    private projectService: ProjectService,
    private route: ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.getProjects();

    this.route.paramMap.subscribe((params: ParamMap) => {
       this.id = +params.get('id');
    });

  }

  getProjects() {
    this.projectList = this.projectService.getProjects();
  }









  // getProjectDetail() {
  //   this.router.navigate(['project-details'], {relativeTo: this.route})
  // }

}
