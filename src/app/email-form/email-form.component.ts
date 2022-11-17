import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-email-form',
  templateUrl: './email-form.component.html',
  styleUrls: ['./email-form.component.css']
})
export class EmailFormComponent implements OnInit {
  FormData: FormGroup;
  constructor( private builder : FormBuilder) { }

  ngOnInit(): void {
    this.FormData = this.builder.group({
      FullName: new FormControl('', [Validators.required]),
      Email: new FormControl('', [Validators.compose([Validators.required, Validators.email])]),
      Comment: new FormControl('', [Validators.required])
    });
  }
}

onsubmit(FormData) {

}
