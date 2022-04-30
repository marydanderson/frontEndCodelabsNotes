import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { Project } from './project-detail/project.model';
import { ProjectScope } from './project-scope.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  projectSelected = new EventEmitter<Project>();
  projectListChanged = new EventEmitter<Project[]>();
  startedEditing = new Subject<number>();

  constructor(private http: HttpClient) { }

  private myProjects: Project[] = [
    new Project(
      // 1,
      'Full Kitchen Remodel',
      'kitchen',
      'new cabinets, demo walls, appliances',
      'future',
      30000,
      new ProjectScope('scope item 1')
    ),
    new Project(
      // 1,
      'Mater Bath Full Remodel',
      'master bath',
      'connvert jetted tub to walk in shower, revamp vanity, new light fixtures',
      'future',
      8000,
      new ProjectScope(
        'Shower wall tile',
        'glass wall tile for 3 sides of wall',
        100,
        'SF',
        4,
        100,
        'N/A',
        'N/A'
        )
    )
  ]

  // Compile Projects
  getProjects() {
    return this.myProjects.slice();
  }


  // Compile Singular Project
  getProject(idx: number) {
    return this.myProjects.slice()[idx];
  }


  // Create new project
  addProject(project: Project) {
    // this.myProjects.push(project);
    // this.projectListChanged.emit(this.myProjects.slice());

    // http request
    // submit and store to firebase database
    let projectData: Project;
    this.http.post(
      'https://house-management-91707-default-rtdb.firebaseio.com/projects.json',
      projectData
      // subscribe to the post request so angular follows thru w/ the response since its listened to
    ).subscribe(responseData => {
      console.log(responseData)
    });
  }

  // Delete project
  removeproject(idx: number) {
    if (idx !== -1) {
      this.myProjects.splice(idx,1)
      this.projectListChanged.emit(this.myProjects.slice())
    }
  }

  // Upate project when edited
  updateProject(idx: number, newProjectInfo: Project) {
    this.myProjects[idx] = newProjectInfo;
    this.projectListChanged.next(this.myProjects.slice())
  }

}
