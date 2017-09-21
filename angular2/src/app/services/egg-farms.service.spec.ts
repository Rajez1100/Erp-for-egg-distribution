import { TestBed, inject } from '@angular/core/testing';

import { EggFarmsService } from './egg-farms.service';

describe('EggFarmsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EggFarmsService]
    });
  });

  it('should be created', inject([EggFarmsService], (service: EggFarmsService) => {
    expect(service).toBeTruthy();
  }));
});
