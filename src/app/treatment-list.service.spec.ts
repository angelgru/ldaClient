import { TestBed, inject } from '@angular/core/testing';

import { TreatmentListService } from './treatment-list.service';

describe('TreatmentListService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TreatmentListService]
    });
  });

  it('should be created', inject([TreatmentListService], (service: TreatmentListService) => {
    expect(service).toBeTruthy();
  }));
});
