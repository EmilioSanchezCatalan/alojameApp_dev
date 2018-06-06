import { TestBed, inject } from '@angular/core/testing';

import { PublicDataService } from './public-data.service';

describe('PublicDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PublicDataService]
    });
  });

  it('should be created', inject([PublicDataService], (service: PublicDataService) => {
    expect(service).toBeTruthy();
  }));
});
