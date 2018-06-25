import { TestBed, inject } from '@angular/core/testing';

import { SetContentTypeInterceptorService } from './set-content-type-interceptor.service';

describe('SetContentTypeInterceptorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SetContentTypeInterceptorService]
    });
  });

  it('should be created', inject([SetContentTypeInterceptorService], (service: SetContentTypeInterceptorService) => {
    expect(service).toBeTruthy();
  }));
});
