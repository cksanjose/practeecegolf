import { TestBed, inject } from '@angular/core/testing';

import { ShotResultService } from './shot-result.service';

describe('ShotResultService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ShotResultService]
    });
  });

  it('should be created', inject([ShotResultService], (service: ShotResultService) => {
    expect(service).toBeTruthy();
  }));
});
