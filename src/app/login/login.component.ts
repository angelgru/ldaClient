import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {LoginService} from "../login.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  myForm: FormGroup;
  email: FormControl;
  password: FormControl;

  message: string;

  constructor(private loginService: LoginService) { }

  ngOnInit() {
    this.createFormControls();
    this.createFormGroup();
    this.message = '';
  }

  createFormControls(): void {
    this.email = new FormControl();
    this.password = new FormControl();
  }

  createFormGroup(): void {
    this.myForm = new FormGroup({
      email: this.email,
      password: this.password
    });
  }


  login(): void {
    window.console.log('LOGIN COMPONENT');
    let email = this.email.value.toString();
    let password = this.password.value.toString();

    this.message = '';

    this.loginService.login(email, password).subscribe(result => {
      localStorage.setItem('username', result.email);
      window.console.log("CHECK " + result.doctor);
      if (result.doctor == 1) {
        localStorage.setItem('isDoctor', 'yes');
        window.console.log(localStorage.getItem('isDoctor'));
      }else {
        localStorage.setItem('isDoctor', 'no');
        window.console.log('IS NOT DOCTOR');
      }
      window.console.log(localStorage.getItem('username'));
    }, error => {
      this.message = 'Incorrect credentials. ' + error.error;
      window.console.log(this.message);
    });
  }

  logout(): any {
    this.loginService.logout();
  }



}
