import { TestBed, inject } from '@angular/core/testing';

import { CollabServiceService } from './collab-service.service';

describe('CollabServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CollabServiceService]
    });
  });

  it('should be created', inject([CollabServiceService], (service: CollabServiceService) => {
    expect(service).toBeTruthy();
  }));
});
