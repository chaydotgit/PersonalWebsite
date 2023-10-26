import { Component, OnInit } from '@angular/core';
import {Observable, of} from "rxjs";
import {ProjectApiService, ProjectResponse} from "../projectapi.service";

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  public projects: Observable<ProjectResponse[]>;

  constructor(private service: ProjectApiService) {
    this.projects = this.service.getProjects();
  }

  ngOnInit(): void {

  }

  convertDate(date: string): string {
    if (date == null) {
      return 'Present';
    }
    let months = ['Present', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
    let dateArray = date.split('-');
    return `${months[+dateArray[1]]} ${dateArray[0]}`;
  }
}
