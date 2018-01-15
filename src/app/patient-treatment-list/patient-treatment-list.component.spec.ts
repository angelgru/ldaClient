import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientTreatmentListComponent } from './patient-treatment-list.component';

describe('PatientTreatmentListComponent', () => {
  let component: PatientTreatmentListComponent;
  let fixture: ComponentFixture<PatientTreatmentListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientTreatmentListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientTreatmentListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
