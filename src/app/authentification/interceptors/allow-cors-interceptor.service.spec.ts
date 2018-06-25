import { TestBed, inject } from '@angular/core/testing';

import { AllowCORSInterceptorService } from './allow-cors-interceptor.service';

describe('AllowCORSInterceptorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AllowCORSInterceptorService]
    });
  });

  it('should be created', inject([AllowCORSInterceptorService], (service: AllowCORSInterceptorService) => {
    expect(service).toBeTruthy();
  }));
});
