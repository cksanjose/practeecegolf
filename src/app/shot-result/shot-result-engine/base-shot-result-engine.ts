import { ShotResult } from '../../shared/shotResult';
import { ISkillLevel } from '../../shared/skillLevel';

export abstract class BaseShotResultEngine {
  public abstract determineShotResult(skillLevel: ISkillLevel, swingCount: number): ShotResult;
}
