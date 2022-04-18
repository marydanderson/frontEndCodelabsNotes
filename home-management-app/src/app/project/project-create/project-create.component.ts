// -------------TEMPLATE DRIVEN APPROACH START --------

// import { Component, OnInit, ViewChild } from '@angular/core';
// import { NgForm } from '@angular/forms';
// import { Project } from '../project-detail/project.model';

// @Component({
//   selector: 'app-project-create',
//   templateUrl: './project-create.component.html',
//   styleUrls: ['./project-create.component.css']
// })
// export class ProjectCreateComponent implements OnInit {
//   @ViewChild('f') signupForm: NgForm;
//   statuses = ['Future', 'Ongoing', 'Completed'];
//   project: Project = {
//     id: 0,
//     name: '',
//     description: '',
//     room: '',
//     status: '',
//     grandTotal: 0
//   }
//   submitted = false;

//   constructor() { }

//   ngOnInit(): void {
//   }


//   // Method triggered when 'submit' button is clicked; to submit New Project Form
//   // Make service?
//   onSubmit() {
//     this.submitted = true;
//     this.project.name = this.signupForm.value.projectName;
//     this.project.room = this.signupForm.value.projectRoom;
//     this.project.description = this.signupForm.value.projectDescription;
//     this.project.status = this.signupForm.value.projectStatus;
//     this.project.grandTotal = this.signupForm.value.grandTotal;

//     //reset the form upon submission
//     this.signupForm.reset();
//   }

// }

// -------------TEMPLATE DRIVEN APPROACH END --------


// -------------REACTIVE DRIVEN APPROACH START --------


import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Project } from '../project-detail/project.model';

@Component({
  selector: 'app-project-create',
  templateUrl: './project-create.component.html',
  styleUrls: ['./project-create.component.css']
})
export class ProjectCreateComponent implements OnInit {
  projectForm: FormGroup;
  status = ['Future', 'Under Construction', 'Complete']


  constructor() { }

  ngOnInit(): void {
    this.projectForm = new FormGroup({
      'projectId': new FormControl(null),
      'projectName': new FormControl(null, Validators.required),
      'projectRoom': new FormControl(null),
      'projectDescription': new FormControl(null),
      'projectStatus': new FormControl('Future'),
      'projectGrandTotal': new FormControl(null),
    });
  }

  onSubmit() {
    console.log(this.projectForm)
  }

}
