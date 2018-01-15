import { Component, OnInit } from '@angular/core';
import {TreatmentDetails} from "../treatment-details";

@Component({
  selector: 'app-patient-treatment-list',
  templateUrl: './patient-treatment-list.component.html',
  styleUrls: ['./patient-treatment-list.component.css']
})
export class PatientTreatmentListComponent implements OnInit {

  treatments: TreatmentDetails[];

  constructor() { }

  ngOnInit() {
  }

}
