import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Project } from '../project-detail/project.model';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-work-breakdown',
  templateUrl: './work-breakdown.component.html',
  styleUrls: ['./work-breakdown.component.css']
})
export class WorkBreakdownComponent implements OnInit {
  project: Project;
  id: number;

  constructor(
    private projectService: ProjectService,
    private route: ActivatedRoute
    ) { }

  ngOnInit(): void {
    // this.route.params.subscribe((params: Params) => {
    //   this.id = +params['id'];
    //   console.log(this.id)
    // })

    this.route.paramMap.subscribe(params => {
      this.id = +params.get('id');
      console.log(this.id)
    })


    // this.project = this.projectService.getProject(this.id)
    // console.log(this.project)
  }
}
