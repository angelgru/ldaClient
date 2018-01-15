import { Component, OnInit } from '@angular/core';
import {Treatment} from "../treatment";
import {TreatmentListService} from "../treatment-list.service";
import {TreatmentDetails} from "../treatment-details";

@Component({
  selector: 'app-accepted-treatments',
  templateUrl: './accepted-treatments.component.html',
  styleUrls: ['./accepted-treatments.component.css']
})
export class AcceptedTreatmentsComponent implements OnInit {

  treatments: Treatment[];
  selectedTreatment: TreatmentDetails;

  constructor(private treatmentService: TreatmentListService) { }

  ngOnInit() {
    this.getTreatments();
  }

  getTreatments(): void {
    this.treatmentService.getAcceptedTreatmentsWithoutDiagnose().subscribe(res => {
      this.treatments = res;
    }, error => {
      window.console.log('ERROR FETCHING ACCEPTED TREATMENTS');
    });
  }

  detailsTreatment(id: number): void {
    this.treatmentService.getTreatmentdetails(id).subscribe(res => {
      this.selectedTreatment = res;
    }, error => {

    });
  }

}
