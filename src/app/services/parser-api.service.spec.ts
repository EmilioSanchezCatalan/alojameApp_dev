import { TestBed, inject } from '@angular/core/testing';

import { ParserApiService } from './parser-api.service';

describe('ParserApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ParserApiService]
    });
  });

  it('should be created', inject([ParserApiService], (service: ParserApiService) => {
    expect(service).toBeTruthy();
  }));
});
