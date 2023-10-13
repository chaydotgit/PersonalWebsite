import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {Observable, map} from "rxjs";
import { environment } from "../environments/environment";

export interface ProjectResponse {
  projectId: string;
  projectName: string;
  startDate: string;
  endDate: string;
  tech: string[];
  descriptions: DescriptionResponse[];
  repoLink: string;
}

export interface DescriptionResponse {
  descriptionId: string;
  projectId: string;
  bulletOrder: number;
  description1: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProjectApiService {
  private url = environment.projectApi;
  constructor(private httpClient: HttpClient) { }

  getProjects(): Observable<ProjectResponse[]> {
    return this.httpClient.get<ProjectResponse[]>(`${this.url}/projects`);
  }

  getProject(id: number): Observable<ProjectResponse> {
    return this.httpClient.get<ProjectResponse>(`${this.url}/projects/${id}`);
  }
}
