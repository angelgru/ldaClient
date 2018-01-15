import { Component, OnInit } from '@angular/core';
import {Treatment} from "../treatment";
import {TreatmentListService} from "../treatment-list.service";
import {TreatmentDetails} from "../treatment-details";

@Component({
  selector: 'app-treatment-list',
  templateUrl: './treatment-list.component.html',
  styleUrls: ['./treatment-list.component.css']
})
export class TreatmentListComponent implements OnInit {

  treatments: Treatment[];
  selectedTreatment: TreatmentDetails;

  constructor(private treatmentService: TreatmentListService) { }

  ngOnInit() {
      this.getTreatments();
  }

  getTreatments(): any {
    this.treatmentService.getTreatments().subscribe(res => {
      this.treatments = res;
    }, error =>{
      window.console.log('Error retrieving treatments');
    });
  }

  acceptTreatment(id: number): void {
    this.treatmentService.acceptTreatment(id).subscribe(res => {
      this.getTreatments();
    }, error => {
      window.console.log("ERROR ACCEPTING TREATMENT");
    });
  }


}
