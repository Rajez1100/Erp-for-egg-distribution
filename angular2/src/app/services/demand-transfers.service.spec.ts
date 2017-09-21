import { TestBed, inject } from '@angular/core/testing';

import { DemandTransfersService } from './demand-transfers.service';

describe('DemandTransfersService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DemandTransfersService]
    });
  });

  it('should be created', inject([DemandTransfersService], (service: DemandTransfersService) => {
    expect(service).toBeTruthy();
  }));
});
