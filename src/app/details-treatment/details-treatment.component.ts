import {Component, Input, OnInit} from '@angular/core';
import {TreatmentDetails} from "../treatment-details";
import {FormControl, FormGroup} from "@angular/forms";
import {LoginService} from "../login.service";
import {TreatmentListService} from "../treatment-list.service";

@Component({
  selector: 'app-details-treatment',
  templateUrl: './details-treatment.component.html',
  styleUrls: ['./details-treatment.component.css']
})
export class DetailsTreatmentComponent implements OnInit {

  myForm: FormGroup;

  diagnosis: FormControl;

  @Input() treatment: TreatmentDetails;

  constructor(private treatmentService: TreatmentListService) { }

  ngOnInit() {
    this.createFormControls();
    this.createFormGroup();
  }

  createFormControls(): void {
    this.diagnosis = new FormControl();
  }

  createFormGroup(): void {
    this.myForm = new FormGroup({
      diagnosis: this.diagnosis
    });
  }

  setDiagnosis(id: number): void {
    this.treatmentService.setDiagnosis(this.diagnosis.value.toString(), id).subscribe(res => {

    }, error => {
      window.console.log('Error setting diagnosis');
    });
  }
}
