import { TestBed, inject } from '@angular/core/testing';

import { AuthOwnerService } from './auth-owner.service';

describe('AuthOwnerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthOwnerService]
    });
  });

  it('should be created', inject([AuthOwnerService], (service: AuthOwnerService) => {
    expect(service).toBeTruthy();
  }));
});
