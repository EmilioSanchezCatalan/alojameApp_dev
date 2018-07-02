import { TestBed, inject } from '@angular/core/testing';

import { HomePublicService } from './home-public.service';

describe('HomePublicService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HomePublicService]
    });
  });

  it('should be created', inject([HomePublicService], (service: HomePublicService) => {
    expect(service).toBeTruthy();
  }));
});
