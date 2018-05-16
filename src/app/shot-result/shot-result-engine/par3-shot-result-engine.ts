import { BaseShotResultEngine } from './base-shot-result-engine';
import { ShotResult } from '../../shared/shotResult';
import { ISkillLevel } from '../../shared/skillLevel';

export class Par3ShotResultEngine extends BaseShotResultEngine {
  public determineShotResult(skillLevel: ISkillLevel, swingCount: number): ShotResult {
    return new ShotResult();
  }
}
