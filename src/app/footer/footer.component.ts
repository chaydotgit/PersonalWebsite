import {Component, NgModule, OnInit} from '@angular/core';
import { CommonModule } from "@angular/common";
import { EmailApiService, EmailResponse} from "../emailapi.service";
import { Observable, map, of } from "rxjs";
import {NgbActiveModal, NgbModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'contact-modal-contact',
  template: `
    <link rel="stylesheet" href="https://use.typekit.net/gsr7uey.css">

    <div *ngIf="{
      emailData: emailData | async
    } as route"
    >
      <div class="modal-header">
        <h4 class="modal-title" style="font-family:playfair-display, serif">Contact</h4>
        <button type="button" class="btn-close" aria-label="Close" (click)="activeModal.dismiss('Cross click')"></button>
      </div>
      <div class="modal-body">
        <div *ngIf="route.emailData"> Email: {{route.emailData.email}} </div>
      </div>
      <div class="modal-footer">
        <p *ngIf="route.emailData"><i>last updated: {{route.emailData.lastUpdatedDate}}</i></p>
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
