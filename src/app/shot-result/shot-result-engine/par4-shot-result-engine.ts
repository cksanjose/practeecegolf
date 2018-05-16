import { BaseShotResultEngine } from './base-shot-result-engine';
import { ISkillLevel } from '../../shared/skillLevel';
import { ShotResult } from '../../shared/shotResult';
import {SkillLevelTypes} from '../../shared/skillLeveTypes';

export class Par4ShotResultEngine extends BaseShotResultEngine {
  determineShotResult(skillLevel: ISkillLevel, swingCount: number): ShotResult {
    if (skillLevel.skillLevelId === SkillLevelTypes.Beginner) {
      if (swingCount <= 1) {

      } else {

      }
    } else {

    }

    return new ShotResult();
  }
}
