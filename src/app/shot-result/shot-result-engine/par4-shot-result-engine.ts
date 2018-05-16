import { BaseShotResultEngine } from './base-shot-result-engine';
import { ISkillLevel } from '../../shared/skillLevel';
import { ShotResult } from '../../shared/shotResult';

export class Par4ShotResultEngine extends BaseShotResultEngine {
  determineShotResult(skillLevel: ISkillLevel, swingCount: number): ShotResult {
    return new ShotResult();
  }
}
