import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {Observable, map} from "rxjs";

export interface EmailResponse {
  email: string;
  lastUpdatedDate: string;
}

@Injectable({
  providedIn: 'root'
})
export class EmailApiService {
  private url = 'https://f1bd3l6trk.execute-api.us-west-1.amazonaws.com/api/contact/email'
  //  private url = 'https://localhost:7252/api/contact/email'
  constructor(private httpClient: HttpClient) { }

  getEmailAddress(): Observable<EmailResponse> {
    return this.httpClient.get<EmailResponse>(this.url);
  }
}
