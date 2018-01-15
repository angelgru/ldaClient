import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {TreatmentListService} from "../treatment-list.service";

@Component({
  selector: 'app-create-treatment',
  templateUrl: './create-treatment.component.html',
  styleUrls: ['./create-treatment.component.css']
})
export class CreateTreatmentComponent implements OnInit {

  myForm: FormGroup;
  patientRequest: FormControl;

  constructor(private treatmentListService: TreatmentListService) { }

  ngOnInit() {
    this.createFormControls();
    this.createForm();
  }

  createFormControls(): void {
    this.patientRequest = new FormControl();
  }

  createForm(): void {
    this.myForm = new FormGroup({
      patientRequest: this.patientRequest
    });
  }

  createTreatment(): void {
    this.treatmentListService.createTreatment(this.patientRequest.value.toString()).subscribe(res => {

    }, error => {
      window.console.log('Error creating a treatment!');
    });
  }

}
