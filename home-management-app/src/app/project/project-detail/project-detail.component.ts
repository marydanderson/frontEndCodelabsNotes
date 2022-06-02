import { Component, Input, OnInit } from '@angular/core';
import { AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { ActivatedRoute, Params } from '@angular/router';
import { ProjectService } from '../project.service';
import { Project } from './project.model';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.css']
})
export class ProjectDetailComponent implements OnInit {

  project: Project;
  projectDoc: AngularFirestoreDocument<Project>

  idx: number;
  @Input() projectInput: Project;

  constructor(
    private route: ActivatedRoute,
    private projectService: ProjectService,
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.idx = params['id'];
      console.log('project params idx: ', this.idx)
      // this.projectDoc = this.projectService.getProject(this.idx)
    })
  }
}
