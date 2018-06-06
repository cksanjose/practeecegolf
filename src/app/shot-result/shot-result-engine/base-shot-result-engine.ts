import { ShotResult } from '../../shared/shotResult';

export abstract class BaseShotResultEngine {
  public shotResults: ShotResult[];
  public filteredShotResults: ShotResult[];
  public shotResult: ShotResult;

  public abstract determineShotResult(skillLevel: number, swingCount: number, previousShotResultId?: number): ShotResult;

  public getChildShotResult(previousShotResultId: number): ShotResult {
    const previousShotResult = this.shotResults.find(s => s.shotResultId === previousShotResultId);
    if (previousShotResult.childResult) {
      const childResults = previousShotResult.childResult;
      const idx = Math.floor(Math.random() * Math.floor( childResults.length));
      this.shotResult = this.shotResults.find(s => s.shotResultId === childResults[idx]);
      return this.shotResult;
    }
  }
}
