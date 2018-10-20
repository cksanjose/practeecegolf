import { TestBed, inject } from '@angular/core/testing';

import { GolfHoleService } from './golf-hole.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('GolfHoleServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GolfHoleService,
        HttpClientTestingModule
      ]
    });
  });

  it('should ...', inject([GolfHoleService], (service: GolfHoleService) => {
    expect(service).toBeTruthy();
  }));
});
