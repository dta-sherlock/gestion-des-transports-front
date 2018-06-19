import { TestBed, inject } from '@angular/core/testing';

import { AuthErrorInterceptorService } from './auth-error-interceptor.service';

describe('AuthErrorInterceptorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthErrorInterceptorService]
    });
  });

  it('should be created', inject([AuthErrorInterceptorService], (service: AuthErrorInterceptorService) => {
    expect(service).toBeTruthy();
  }));
});
