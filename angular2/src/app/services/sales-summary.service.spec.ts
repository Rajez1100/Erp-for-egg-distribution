import { TestBed, inject } from '@angular/core/testing';

import { SalesSummaryService } from './sales-summary.service';

describe('SalesSummaryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SalesSummaryService]
    });
  });

  it('should be created', inject([SalesSummaryService], (service: SalesSummaryService) => {
    expect(service).toBeTruthy();
  }));
});
