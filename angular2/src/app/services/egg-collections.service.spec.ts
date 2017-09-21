import { TestBed, inject } from '@angular/core/testing';

import { EggCollectionsService } from './egg-collections.service';

describe('EggCollectionsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EggCollectionsService]
    });
  });

  it('should be created', inject([EggCollectionsService], (service: EggCollectionsService) => {
    expect(service).toBeTruthy();
  }));
});
