import { HttpClient, HttpParams } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { Project } from './project-detail/project.model';
import { map, take, exhaustMap } from 'rxjs/operators';
import { AuthService } from '../authentication/auth.service';


@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  projectSelected = new EventEmitter<Project>();
  projectListChanged = new EventEmitter<Project[]>();
  startedEditing = new Subject<number>();

  constructor(private http: HttpClient, private authService: AuthService) { }

  private myProjects: Project[] = []

  // Compile All Projects
  getProjects() {
    //NEED TO FIX CODE BELOW. IT SHOULD BE FETCHING DATA AFTER A USER IS LOGGED IN AND TOKEN PASSED
    return this.authService.user.pipe(take(1), exhaustMap(user => {  //listener_subscribe to if user was created; immmediately unsubscribe after first round of info is obtained (that's what take(1) does) | ony get user once
      return this.http.get(
        'https://house-management-91707-default-rtdb.firebaseio.com/projects.json',
        // {
        //   params: new HttpParams().set('auth', user.token)
        // }//provide query parameter w/ token from user
      );
    }),
      map(responseData => {
        console.log('project response data = ' + responseData)
        // const projectsArray: Project[] = [];
        for (const key in responseData) {
          if (responseData.hasOwnProperty(key)) {
            this.myProjects.push({...responseData[key], id: key})
          }
        }
        console.log(this.myProjects)
      return this.myProjects
      })
    )
  }




  // Compile Singular Project
  getProject(idx: number) {
    return this.myProjects.slice()[idx];
  }

  // Create new project ; http request
  addProject(addedProject: Project) {
    // submit and store to firebase database
    const projectData: Project = addedProject;
    // SHOULD I MAKE A PUT FOR ID IN ARRAYS
    this.http.post(
      'https://house-management-91707-default-rtdb.firebaseio.com/projects.json',
      projectData
      // subscribe to the post request so angular follows thru w/ the response since its listened to
    ).subscribe(responseData => {
      // console.log(responseData)
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
  // updateProject(idx: number, newProjectInfo: Project) {
  //   this.myProjects[idx] = newProjectInfo;
  //   this.projectListChanged.next(this.myProjects.slice())
  // }

}
