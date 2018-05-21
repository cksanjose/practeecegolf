import { ShotResult } from '../../shared/shotResult';

export abstract class BaseShotResultEngine {
  public shotResults: ShotResult[];
  public filteredShotResults: ShotResult[];
  public shotResult: ShotResult;
  public abstract determineShotResult(skillLevel: number, swingCount: number): ShotResult;
}
