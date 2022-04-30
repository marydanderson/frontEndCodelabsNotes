// -------------TEMPLATE DRIVEN APPROACH START --------

import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild, OnChanges, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, ParamMap, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Project } from '../project-detail/project.model';
import { ProjectService } from '../project.service';


@Component({
  selector: 'app-project-form',
  templateUrl: './project-form.component.html',
  styleUrls: ['./project-form.component.css']
})
export class ProjectFormComponent implements OnInit {
  @ViewChild('f') projectForm: NgForm;
  statuses = ['Future', 'Ongoing', 'Completed'];
  id: number;
  projectDetails: Project = {
    name: '',
    room: '',
    description: '',
    status: '',
    grandTotal: 0
  }

  submitted = false;
  addAnotherProject: boolean = false;
  subscription: Subscription;
  editMode = false;
  editedItemIndex: number;
  editedProject: Project;

  constructor(
    private projectService: ProjectService,
    private route: ActivatedRoute,
    router: Router,
    private http: HttpClient,
    ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = +params["id"];
      this.editMode = params["id"] != null;
    })

    this.projectService.startedEditing.subscribe

    // If we are editting the item, not adding a new one, initialize edit mode
    if (this.editMode) {
      this.projectDetails = this.projectService.getProject(this.id)
    }
  }


  // Method triggered when 'submit' button is clicked; to submit New Project Form

  // onSubmit(ngForm: NgForm) {

  //   this.project.name = this.projectForm.value.projectName;
  //   this.project.room = this.projectForm.value.projectRoom;
  //   this.project.description = this.projectForm.value.projectDescription;
  //   this.project.status = this.projectForm.value.projectStatus;
  //   this.project.grandTotal = this.projectForm.value.grandTotal;
  //   this.projectService.addProject(this.project)
  //   console.log(this.projectService.getProjects())
  //   this.submitted = true;
  //   //reset the form upon submission
  //   // this.projectForm.reset();
  // }

  // onSubmit(formObj: NgForm) {
  onSubmit(projectData: Project) {
    // Destructor project properties; values need to match name on the formgroups
    const { projectName, projectRoom, projectDescription, projectStatus, grandTotal} = formObj.value;

    // Assign our blank project details to formValues inputted
    this.projectDetails = new Project(
      projectName,
      projectRoom,
      projectDescription,
      projectStatus,
      grandTotal
    );

    this.projectService.addProject(this.projectDetails);

    // if (this.editMode) {
    //   // Edit existing project
    //   this.projectService.updateProject(this.id, this.projectDetails);
    // } else {
    //   // Create new project
    //   this.projectService.addProject(this.projectDetails);
    //   this.submitted = true;
    // }

  }

  ngOnDestory() {
    // prevent memory leak
    this.subscription.unsubscribe();
  }

}
