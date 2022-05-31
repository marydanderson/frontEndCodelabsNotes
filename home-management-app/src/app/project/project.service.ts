import { EventEmitter, Injectable, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Project } from './project-detail/project.model';
import { AuthService } from '../authentication/auth.service';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument, fromDocRef } from '@angular/fire/compat/firestore';


@Injectable({
  providedIn: 'root'
})
export class ProjectService implements OnInit{
  projectCollection: AngularFirestoreCollection<Project>;
  projectObservable: Observable<any>;
  projectList: Project[];


  constructor(private authService: AuthService, private afs: AngularFirestore,)
    {}

  ngOnInit(): void {
    // this.onUserDataChange();
  }

  // Create project to User Specific Firestore database
  createProject(project: Project) {
    let userId = this.authService.userData.uid;
    const projectData: Project = {
      name: project.name,
      room: project.room,
      description: project.description,
      status: project.status,
      grandTotal: project.grandTotal
    };
    return new Promise<any>((resolve, reject) => {
      console.log(project.name)
      this.afs
        .collection('users')
        .doc(userId)
        .collection('projects')
        .add({ projectData })
    })
  }

  // Retrieve all projects for user
  getProjects() {
    return this.afs
      .collection('users')
      .doc(this.authService.userData.uid)
      .collection('projects')
    .get()
  }



  // Get indv. project; pass in firebase unique id (uid)
  getProject(projectID) {
    return this.afs
      .collection('users')
      .doc(this.authService.userData.uid)
      .collection('projects')
      .valueChanges();
  }

}
