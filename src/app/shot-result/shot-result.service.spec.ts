import { TestBed, inject } from '@angular/core/testing';

import { ShotResultService } from './shot-result.service';
import { ShotResultComponent } from './shot-result.component';
import { PracticeNavComponent } from '../shared/practice-nav/practice-nav.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ShotResultService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpClientTestingModule,
        ShotResultService,
        ShotResultComponent,
        PracticeNavComponent
      ]
    });
  });

  it('should be created', inject([ShotResultService], (service: ShotResultService) => {
    expect(service).toBeTruthy();
  }));
});
