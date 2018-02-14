import { TestBed, inject } from '@angular/core/testing';

import { PlayerProfileServiceService } from './player-profile-service.service';

describe('PlayerProfileServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PlayerProfileServiceService]
    });
  });

  it('should be created', inject([PlayerProfileServiceService], (service: PlayerProfileServiceService) => {
    expect(service).toBeTruthy();
  }));
});
