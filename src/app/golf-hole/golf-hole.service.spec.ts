import { TestBed, inject } from '@angular/core/testing';

import { GolfHoleService } from './golf-hole.service';

describe('GolfHoleServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GolfHoleService]
    });
  });

  it('should ...', inject([GolfHoleService], (service: GolfHoleService) => {
    expect(service).toBeTruthy();
  }));
});
