import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../project.service';
import { Project } from '../project-detail/project.model';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {
  projectList: Project[] = [];
  id: number;
  addNewProject: boolean = false;


  constructor(
    private projectService: ProjectService,
    private route: ActivatedRoute,
    private http: HttpClient,
    ) { }

  ngOnInit(): void {
    // http request to pre load projects in database
    this.projectService.getProjects().subscribe( projects => {
      this.projectList = projects;
    })
    console.log(this.projectList)


    this.route.paramMap.subscribe((params: ParamMap) => {
       this.id = +params.get('id');
     });

  }

  getProjects() {
    // receive data from the server and subscribe to any changes in the data
    this.projectService.getProjects().subscribe( projects => {
      // make data fetched from server equal to this component's variables for displaying
      this.projectList = projects;
    })
  }

  removeProject(index: number) {
    this.projectService.removeproject(index);

  }

  addNewProjectTrue() {
    console.log('new project added');
    this.addNewProject = true;
  }

  // When indv. 'edit' button is clicked for a project, go to the form to edit it
  onEditItem(index: number) {
    // tell project service that this index needs to be listened to in the subject.
    this.projectService.startedEditing.next(index)
    console.log(this.projectService.startedEditing)
    console.log(index)
  }

  // create method that can be reused to fetch data from http

}
