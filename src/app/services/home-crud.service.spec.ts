import { TestBed, inject } from '@angular/core/testing';

import { HomeCrudService } from './home-crud.service';

describe('HomeCrudService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HomeCrudService]
    });
  });

  it('should be created', inject([HomeCrudService], (service: HomeCrudService) => {
    expect(service).toBeTruthy();
  }));
});
