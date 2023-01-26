import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class EmailapiService {
  private url = 'insert api call'
  constructor(private httpClient: HttpClient) { }

  getEmailAddress() {
    return this.httpClient.get(this.url);
  }
}
