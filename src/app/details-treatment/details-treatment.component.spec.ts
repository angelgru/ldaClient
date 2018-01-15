import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsTreatmentComponent } from './details-treatment.component';

describe('DetailsTreatmentComponent', () => {
  let component: DetailsTreatmentComponent;
  let fixture: ComponentFixture<DetailsTreatmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsTreatmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsTreatmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
