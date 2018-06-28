import { TestBed, inject } from '@angular/core/testing';

import { AuthStudentService } from './auth-student.service';

describe('AuthStudentService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthStudentService]
    });
  });

  it('should be created', inject([AuthStudentService], (service: AuthStudentService) => {
    expect(service).toBeTruthy();
  }));
});
