import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../project.service';
import { Project } from '../project-detail/project.model';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AuthService } from 'src/app/authentication/auth.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {
  projectList: Project[] = [];
  id: number;
  addNewProject: boolean = false;
  projects: any;

  constructor(
    private projectService: ProjectService,
    private route: ActivatedRoute,
    private http: HttpClient,
    private afs: AngularFirestore,
    private authService: AuthService
    ) { }

  ngOnInit(): void {
    // http request to pre load projects in database
    this.projectService.getProjects().subscribe(data => console.log('data', data));


  }


  retrieveProjects() {
    // this.projects.push(this.projectService.getProjects())


  }

  removeProject(index: number) {

  }

  addNewProjectTrue() {
    console.log('new project added');
    this.addNewProject = true;
  }

  // When indv. 'edit' button is clicked for a project, go to the form to edit it
  onEditItem(index: number) {

  }

  // create method that can be reused to fetch data from http

}
