import { Injectable } from '@angular/core';
import { Project } from './project-detail/project.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor() { }

  private myProjects: Project[] = [
    { id: 0,
      name: 'Full Kitchen Remodel',
      room: 'kitchen',
      description: 'new cabinets, take down walls, appliances',
      status: 'future',
      grandTotal: 30000 },
    { id: 1,
      name: 'Master Bathroom Full Remodel',
      room: 'master bath',
      description: 'new cabinets, take down walls, appliances',
      status: 'future',
      grandTotal: 8000 }
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
}
