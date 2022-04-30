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
    this.fetchProjects();
    // use service to set local "projectList" to array in Service/Blogabl "myProjects" array
    this.projectList = this.projectService.getProjects();

    // subscribe to projectService & listern to projectListChanged Emitter to get all globabl updates inside this component
    this.projectService.projectListChanged.subscribe((projects: Project[]) => {
      this.projectList = projects;
    });

    this.route.paramMap.subscribe((params: ParamMap) => {
       this.id = +params.get('id');
     });

  }

  getProjects() {
    this.projectList = this.projectService.getProjects();
    this.fetchProjects();

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
  private fetchProjects() {
      // use http request w firebase to fetch projects
      this.http.get< {[key: string]: Project}>('https://house-management-91707-default-rtdb.firebaseio.com/projects.json')
      // transform database given object to usable array
      .pipe(map((responseData: {[key: string]: Project}) => {
        const projectsArray: Project[] = [];
        for (const key in responseData) {
          if (responseData.hasOwnProperty(key)) {
            projectsArray.push({ ...responseData[key], id: key})
          }
        }
        return projectsArray
      }))
      .subscribe(projects => {
        this.projectList = projects
      })
  }

}
