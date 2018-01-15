import { TestBed, inject } from '@angular/core/testing';

import { CreateTreatmentService } from './create-treatment.service';

describe('CreateTreatmentService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CreateTreatmentService]
    });
  });

  it('should be created', inject([CreateTreatmentService], (service: CreateTreatmentService) => {
    expect(service).toBeTruthy();
  }));
});
