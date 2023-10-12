import { Component, OnInit } from '@angular/core';
import {Observable, of} from "rxjs";
import {ProjectApiService, ProjectResponse} from "../projectapi.service";

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  public project0: Observable<ProjectResponse | null> = of(null);
  public project1: Observable<ProjectResponse | null> = of(null);
  public project2: Observable<ProjectResponse | null> = of(null);
  public project3: Observable<ProjectResponse | null> = of(null);
  public project4: Observable<ProjectResponse | null> = of(null);
  public project5: Observable<ProjectResponse | null> = of(null);

  constructor(private service: ProjectApiService) {
    this.project0 = this.service.getProject(0);
    this.project1 = this.service.getProject(1);
    this.project2 = this.service.getProject(2);
    this.project3= this.service.getProject(3);
    this.project4 = this.service.getProject(4);
    this.project5 = this.service.getProject(5);
  }

  ngOnInit(): void {
  }

}
