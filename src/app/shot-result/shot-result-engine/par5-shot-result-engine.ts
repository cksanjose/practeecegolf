import {BaseShotResultEngine} from './base-shot-result-engine';
import { ISkillLevel } from '../../shared/skillLevel';
import { ShotResult } from '../../shared/shotResult';
import {SkillLevelTypes} from '../../shared/skillLeveTypes';

export class Par5ShotResultEngine extends BaseShotResultEngine {
    public determineShotResult(skillLevel: ISkillLevel, swingCount: number): ShotResult {
      if (skillLevel.skillLevelId === SkillLevelTypes.Beginner) {
        if (swingCount <= 1) {

        } else {

        }
      } else {

      }
      return new ShotResult();
    }
}
