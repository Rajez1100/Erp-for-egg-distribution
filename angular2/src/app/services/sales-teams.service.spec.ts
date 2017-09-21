import { TestBed, inject } from '@angular/core/testing';

import { SalesTeamsService } from './sales-teams.service';

describe('SalesTeamsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SalesTeamsService]
    });
  });

  it('should be created', inject([SalesTeamsService], (service: SalesTeamsService) => {
    expect(service).toBeTruthy();
  }));
});
