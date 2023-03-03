import {Component, NgModule, OnInit} from '@angular/core';
import { CommonModule } from "@angular/common";
import { EmailApiService, EmailResponse} from "../emailapi.service";
import { Observable, map, of } from "rxjs";
import {NgbActiveModal, NgbModal} from "@ng-bootstrap/ng-bootstrap";


@Component({
  selector: 'contact-modal-contact',
  template: `
    <div *ngIf="{
      emailData: emailData | async
    } as route"
    >
      <div class="modal-header">
        <h3 class="modal-title fancy-txt">Contact</h3>
        <button type="button" class="btn-close" aria-label="Close" (click)="activeModal.dismiss('Cross click')"></button>
      </div>

      <div class="modal-body text-center">
        Please contact me through my email below!
        <div *ngIf="route.emailData; else elseBlock"> <i class="fa fa-envelope"></i>&nbsp;&nbsp;&nbsp;{{route.emailData.email}} </div>
        <ng-template #elseBlock><br><div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div></ng-template>
      </div>

      <div class="modal-footer">
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
