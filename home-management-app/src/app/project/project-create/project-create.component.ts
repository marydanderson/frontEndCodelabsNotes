// -------------TEMPLATE DRIVEN APPROACH START --------

import { Component, OnInit, ViewChild, OnChanges, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Project } from '../project-detail/project.model';
import { ProjectService } from '../project.service';


@Component({
  selector: 'app-project-create',
  templateUrl: './project-create.component.html',
  styleUrls: ['./project-create.component.css']
})
export class ProjectCreateComponent implements OnInit {
  @ViewChild('f') projectForm: NgForm;
  statuses = ['Future', 'Ongoing', 'Completed'];
  project: Project = new Project(
    // 0,
    '',
    '',
    '',
    '',
    0
  )

  submitted = false;
  addAnotherProject: boolean = false;
  subscription: Subscription;
  editMode = false;
  editedItemIndex: number;
  editedProject: Project;

  constructor( private projectService: ProjectService) { }

  ngOnInit(): void {
    // subscribe to events when startedEditing is utlized in the service (i.e. when the edit project button is clicked)
    this.subscription = this.projectService.startedEditing.subscribe(
      (index: number) => {
        this.editedItemIndex = index;
        console.log(this.editedItemIndex)
        // tell program we need to edit a project in the form, not create a new one
        this.editMode = true;
        // set the project we want to edit equal to the project we retrieved in the service
        this.editedProject = this.projectService.getProject(index);
        this.projectForm.setValue({
          projectName: this.editedProject.name,
          projectRoom: this.editedProject.room,
          projectDescription: this.editedProject.description,
          projectStatus: this.editedProject.status,
          grandTotal: this.editedProject.grandTotal
        })
      }
    )

  }


  // Method triggered when 'submit' button is clicked; to submit New Project Form

  onSubmit(ngForm: NgForm) {

    this.project.name = this.projectForm.value.projectName;
    this.project.room = this.projectForm.value.projectRoom;
    this.project.description = this.projectForm.value.projectDescription;
    this.project.status = this.projectForm.value.projectStatus;
    this.project.grandTotal = this.projectForm.value.grandTotal;
    this.projectService.addProject(this.project)
    console.log(this.projectService.getProjects())
    this.submitted = true;
    //reset the form upon submission
    // this.projectForm.reset();
  }

  ngOnDestory() {
    // prevent memory leak
    this.subscription.unsubscribe();
  }

}

// -------------TEMPLATE DRIVEN APPROACH END --------


// -------------REACTIVE DRIVEN APPROACH START --------


// import { Component, OnInit, ViewChild } from '@angular/core';
// import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
// import { Project } from '../project-detail/project.model';

// @Component({
//   selector: 'app-project-create',
//   templateUrl: './project-create.component.html',
//   styleUrls: ['./project-create.component.css']
// })
// export class ProjectCreateComponent implements OnInit {
//   projectForm: FormGroup;
//   status = ['Future', 'Under Construction', 'Complete']


//   constructor() { }

//   ngOnInit(): void {
//     this.projectForm = new FormGroup({
//       'projectId': new FormControl(null),
//       'projectName': new FormControl(null, Validators.required),
//       'projectRoom': new FormControl(null),
//       'projectDescription': new FormControl(null),
//       'projectStatus': new FormControl('Future'),
//       'projectGrandTotal': new FormControl(null),
//     });
//   }

//   onSubmit() {
//     console.log(this.projectForm)
//   }

// }
