import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {Observable, map} from "rxjs";
import { environment } from "../environments/environment";

export interface EmailResponse {
  email: string;
  lastUpdatedDate: string;
}

@Injectable({
  providedIn: 'root'
})
export class EmailApiService {
  private url = environment.contactApi;
  constructor(private httpClient: HttpClient) { }

  getEmailAddress(): Observable<EmailResponse> {
    return this.httpClient.get<EmailResponse>(this.url);
  }
}
