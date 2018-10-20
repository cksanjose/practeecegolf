import { TestBed, inject } from '@angular/core/testing';
import { SkillLevelService } from './skilllevel.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import {HttpClientModule} from '@angular/common/http';

describe('SkillLevelService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientModule
      ],
      providers: [SkillLevelService,
        HttpClientTestingModule
      ]
    });
  });

  it('should be created', inject([SkillLevelService], (service: SkillLevelService) => {
    expect(service).toBeTruthy();
  }));
});
