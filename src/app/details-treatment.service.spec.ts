import { TestBed, inject } from '@angular/core/testing';

import { DetailsTreatmentService } from './details-treatment.service';

describe('DetailsTreatmentService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DetailsTreatmentService]
    });
  });

  it('should be created', inject([DetailsTreatmentService], (service: DetailsTreatmentService) => {
    expect(service).toBeTruthy();
  }));
});
