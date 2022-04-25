import { EventEmitter, Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { Project } from './project-detail/project.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  projectSelected = new EventEmitter<Project>();
  projectListChanged = new EventEmitter<Project[]>();
  startedEditing = new Subject<number>();

  constructor() { }

  private myProjects: Project[] = [
    new Project(
      // 1,
      'Full Kitchen Remodel',
      'kitchen',
      'new cabinets, dmeo walls, appliances',
      'future',
      30000
    ),
    new Project(
      // 1,
      'Full Kitchen Remodel',
      'kitchen',
      'new cabinets, dmeo walls, appliances',
      'future',
      30000
    )

    // { id: 0,
    //   name: 'Full Kitchen Remodel',
    //   room: 'kitchen',
    //   description: 'new cabinets, take down walls, appliances',
    //   status: 'future',
    //   grandTotal: 30000 },
    // { id: 1,
    //   name: 'Master Bathroom Full Remodel',
    //   room: 'master bath',
    //   description: 'new cabinets, take down walls, appliances',
    //   status: 'future',
    //   grandTotal: 8000 }
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
    this.myProjects.push(project);
    this.projectListChanged.emit(this.myProjects.slice());
  }

  // Delete project
  removeproject(idx: number) {
    if (idx !== -1) {
      this.myProjects.splice(idx,1)
      this.projectListChanged.emit(this.myProjects.slice())
    }
  }

}
