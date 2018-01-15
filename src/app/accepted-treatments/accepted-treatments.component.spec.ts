import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcceptedTreatmentsComponent } from './accepted-treatments.component';

describe('AcceptedTreatmentsComponent', () => {
  let component: AcceptedTreatmentsComponent;
  let fixture: ComponentFixture<AcceptedTreatmentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcceptedTreatmentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcceptedTreatmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
