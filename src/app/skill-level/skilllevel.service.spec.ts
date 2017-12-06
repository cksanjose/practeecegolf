import { TestBed, inject } from '@angular/core/testing';

import { SkillLevelService } from './skilllevel.service';

describe('SkillLevelService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SkillLevelService]
    });
  });

  it('should be created', inject([SkillLevelService], (service: SkillLevelService) => {
    expect(service).toBeTruthy();
  }));
});
