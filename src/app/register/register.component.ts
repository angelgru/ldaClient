import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {User} from "../user";
import {RegisterService} from "../register.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  myForm: FormGroup;
  email: FormControl;
  password: FormControl;
  password_confirm: FormControl;
  name: FormControl;
  phone_number: FormControl;
  emergency_phone_number: FormControl;

  user: User;

  constructor(private registerService: RegisterService, private router: Router) { }

  ngOnInit() {
    this.createFormControls();
    this.createForm();
  }

  createFormControls(): void {
    this.email = new FormControl();
    this.password = new FormControl();
    this.password_confirm = new FormControl();
    this.name = new FormControl();
    this.phone_number = new FormControl();
    this.emergency_phone_number = new FormControl();
  }

  createForm(): void {
    this.myForm = new FormGroup({
      email: this.email,
      password: this.password,
      password_confirm: this.password_confirm,
      name: this.name,
      phone_number: this.phone_number,
      emergency_phone_number: this.emergency_phone_number
    });
  }

  register(): void {
    this.user = new User();
    this.user.email = this.email.value.toString();
    this.user.password = this.password.value.toString();
    this.user.emergencyPhone = this.emergency_phone_number.value.toString();
    this.user.name = this.name.value.toString();
    this.user.phoneNumber = this.phone_number.value.toString();
    this.registerService.register(this.user).subscribe(result => {
      window.console.log(result.name);
    }, error => {
      window.console.log('Error registering user! ' + error);
    });
  }



}
