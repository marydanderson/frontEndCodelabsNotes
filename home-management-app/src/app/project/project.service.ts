import { Injectable } from '@angular/core';
import { Project } from './project-item/project.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor() { }

  private myProjects: Project[] = [
    {name: 'Full Kitchen Remodel',
      room: 'kitchen',
      description: 'new cabinets, take down walls, appliances',
      status: 'future',
      grandTotal: 30000 }
  ]

  // Compile Projects
  getProjects() {
    return this.myProjects.slice();
  }

  // Create new project
}
