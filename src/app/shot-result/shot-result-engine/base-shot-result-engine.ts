import { ShotResult } from '../../shared/shotResult';

export abstract class BaseShotResultEngine {
  public shotResults: ShotResult[];
  public abstract determineShotResult(skillLevel: string, swingCount: number): ShotResult;
}
