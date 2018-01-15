import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { TreatmentListComponent } from './treatment-list/treatment-list.component';
import { CreateTreatmentComponent } from './create-treatment/create-treatment.component';
import { DetailsTreatmentComponent } from './details-treatment/details-treatment.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {RegisterService} from "./register.service";
import {LoginService} from "./login.service";
import {RouterModule, Routes, CanActivate} from "@angular/router";
import {TreatmentListService} from "./treatment-list.service";
import {TreatmentDetails} from "./treatment-details";
import { AcceptedTreatmentsComponent } from './accepted-treatments/accepted-treatments.component';
import { ConnectSensorComponent } from './connect-sensor/connect-sensor.component';
import { PatientTreatmentComponent } from './patient-treatment/patient-treatment.component';
import {SensorService} from "./sensor.service";
import { PatientTreatmentListComponent } from './patient-treatment-list/patient-treatment-list.component';
import {RouteGuardService} from "./route-guard.service";


const routes: Routes = [
  { path: '', component: TreatmentListComponent, canActivate: [RouteGuardService]},
  { path: 'accepted', component:  AcceptedTreatmentsComponent, canActivate: [RouteGuardService] },
  { path: 'details', component: DetailsTreatmentComponent, canActivate: [RouteGuardService] },
  { path: 'sensor', component: ConnectSensorComponent, canActivate: [RouteGuardService] },
  { path: 'treatment', component: CreateTreatmentComponent, canActivate: [RouteGuardService] },
  { path: 'patient/treatments', component:  PatientTreatmentComponent, canActivate: [RouteGuardService] }
];

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    TreatmentListComponent,
    CreateTreatmentComponent,
    DetailsTreatmentComponent,
    AcceptedTreatmentsComponent,
    ConnectSensorComponent,
    PatientTreatmentComponent,
    PatientTreatmentListComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    RegisterService,
    LoginService,
    TreatmentListService,
    SensorService,
    RouteGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
