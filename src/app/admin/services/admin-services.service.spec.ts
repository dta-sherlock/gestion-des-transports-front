import { TestBed, inject } from '@angular/core/testing';

import { AdminServices } from './admin-services.service';

describe('AdminServices', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AdminServices]
    });
  });

  it('should be created', inject([AdminServices], (service: AdminServices) => {
    expect(service).toBeTruthy();
  }));
});
