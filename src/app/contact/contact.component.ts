import { Component, OnInit } from '@angular/core';
import {EmailApiService, EmailResponse} from "../emailapi.service";
import {Observable, map, of} from "rxjs";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  public emailData: Observable<EmailResponse | null> = of(null);

  constructor(private service:EmailApiService) { }

  ngOnInit(): void {
  }

  getEmail(): void {
    this.emailData = this.service.getEmailAddress();
  }
}
