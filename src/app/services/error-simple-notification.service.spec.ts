import { TestBed, inject } from '@angular/core/testing';

import { ErrorSimpleNotificationService } from './error-simple-notification.service';

describe('ErrorSimpleNotificationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ErrorSimpleNotificationService]
    });
  });

  it('should be created', inject([ErrorSimpleNotificationService], (service: ErrorSimpleNotificationService) => {
    expect(service).toBeTruthy();
  }));
});
