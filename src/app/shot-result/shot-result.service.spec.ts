import { TestBed, inject } from '@angular/core/testing';

import { ShotResultService } from './shot-result.service';
import {ShotResultComponent} from './shot-result.component';
import {PracticeNavComponent} from '../shared/practice-nav/practice-nav.component';

describe('ShotResultService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ShotResultService,
        ShotResultComponent,
        PracticeNavComponent
      ]
    });
  });

  it('should be created', inject([ShotResultService], (service: ShotResultService) => {
    expect(service).toBeTruthy();
  }));
});
