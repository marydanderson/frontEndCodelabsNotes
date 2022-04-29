import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, NgForm } from '@angular/forms';
import { ProjectScope } from '../../project-scope.model';


@Component({
  selector: 'app-work-form',
  templateUrl: './work-form.component.html',
  styleUrls: ['./work-form.component.css']
})
export class WorkFormComponent implements OnInit {
  workForm: FormGroup;
  columns: string;
  item: string;
  workFormDetails: ProjectScope = {
    name: "",
  }

  constructor( ) { }

  ngOnInit(): void {
    this.workForm = new FormGroup({
      name: new FormControl(null),
      details: new FormControl(null),
      qty: new FormControl(null),
      qtyUnit: new FormControl(null),
      unitPrice: new FormControl(null),
      calculatedPrice: new FormControl(null),
      url: new FormControl(null),
      photo: new FormControl(null),
    })
  }

  // submit form for adding work scope items
  onFormSubmit(formObj: NgForm) {
    console.log('Submitted!', this.workForm);
    this.workFormDetails.name = formObj.value.name
  }

}
