import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {SensorService} from "../sensor.service";

@Component({
  selector: 'app-connect-sensor',
  templateUrl: './connect-sensor.component.html',
  styleUrls: ['./connect-sensor.component.css']
})
export class ConnectSensorComponent implements OnInit {

  myForm: FormGroup;
  stype: FormControl;
  unit: FormControl;
  regular_from: FormControl;
  regular_to: FormControl;

  constructor(private sensorService: SensorService) { }

  ngOnInit() {
    this.createFormControls();
    this.createForm();
  }


  createFormControls(): void {
    this.stype = new FormControl();
    this.unit = new FormControl();
    this.regular_from = new FormControl();
    this.regular_to = new FormControl();
  }

  createForm(): void {
    this.myForm = new FormGroup({
      stype: this.stype,
      unit: this.unit,
      regular_from: this.regular_from,
      regular_to: this.regular_to
    });
  }

  connectSensor(): void {
    this.sensorService.connectSensor(this.stype.value.toString(), this.unit.value.toString(), parseInt(this.regular_from.value.toString()), parseInt(this.regular_to.value.toString())).subscribe(res => {

    }, error => {
      window.console.log('Error attaching sensor');
    });
  }
}
