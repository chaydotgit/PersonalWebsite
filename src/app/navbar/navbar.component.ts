import { Component, OnInit } from '@angular/core';
import {Observable, of} from "rxjs";
import {EmailApiService, EmailResponse} from "../emailapi.service";
import {NgbActiveModal, NgbModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'contact-modal-contact',
  template: `
    <div *ngIf="{
      emailData: emailData | async
    } as route">
      <div class="modal-header" style="background: #f6f2ec">
        <h3 class="modal-title fancy-txt" style="color:#afc47d">C O N N E C T</h3>
        <button type="button" class="btn-close" aria-label="Close" (click)="activeModal.dismiss('Cross click')"></button>
      </div>

      <div class="modal-body" style="display: flex; flex-direction: row; align-items: center; background: #f6f2ec">
        <div style="text-align: center; flex: 1">
          Please contact me through my email below!
          <div *ngIf="route.emailData; else elseBlock"> <i class="fa fa-envelope" style="color: #afc47d"></i>&nbsp;&nbsp;&nbsp;{{route.emailData.email}} </div>
          <ng-template #elseBlock><br><div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div></ng-template>
        </div>
        <img src="assets/images/connect.png" style="width: 100px; margin: auto; text-align: center; flex: 1;">
      </div>

      <div class="modal-footer" style="background: #f6f2ec">
        <div *ngIf="route.emailData"><i>last updated: {{route.emailData.lastUpdatedDate}} from
          <a href="https://api.chayannerodriguez.com/api/contact/email" target="_blank">Personal API</a></i>
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
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  open() {
    this.modalService.open(ContactModalContent);
  }
}
