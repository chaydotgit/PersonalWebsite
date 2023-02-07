import {Component, NgModule, OnInit} from '@angular/core';
import { CommonModule } from "@angular/common";
import { EmailApiService, EmailResponse} from "../emailapi.service";
import { Observable, map, of } from "rxjs";
import {NgbActiveModal, NgbModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'contact-modal-contact',
  styleUrls: ['./footer.component.css'],
  template: `
      <link rel="stylesheet" href="https://use.typekit.net/gsr7uey.css" xmlns="http://www.w3.org/1999/html">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

    <div *ngIf="{
      emailData: emailData | async
    } as route"
    >
      <div class="modal-header">
        <h3 class="modal-title text-center" style="font-family:playfair-display, serif; font-weight: bold">Contact</h3>
        <button type="button" class="btn-close" aria-label="Close" (click)="activeModal.dismiss('Cross click')"></button>
      </div>

      <div class="modal-body text-center">
        Please contact me through my email below!
        <div *ngIf="route.emailData; else elseBlock"> <i class="fa fa-envelope"></i>&nbsp;&nbsp;&nbsp;{{route.emailData.email}} </div>
        <ng-template #elseBlock><br><div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div></ng-template>
      </div>

      <div class="modal-footer">
        <div *ngIf="route.emailData"><i>last updated: {{route.emailData.lastUpdatedDate}} from
          <a href="https://f1bd3l6trk.execute-api.us-west-1.amazonaws.com/api/contact/email" target="_blank">Personal API</a></i>
        </div>
      </div>
    </div>
  `,
})

export class ContactModalContent {
  public emailData: Observable<EmailResponse | null> = of(null);
  constructor(private service:EmailApiService, public activeModal: NgbActiveModal) {
    this.emailData = this.service.getEmailAddress();
  }
}

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  open() {
    this.modalService.open(ContactModalContent);
  }
}
