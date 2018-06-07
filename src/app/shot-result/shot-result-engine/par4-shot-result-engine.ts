import { BaseShotResultEngine } from './base-shot-result-engine';
import { ShotResult } from '../../shared/shotResult';

export class Par4ShotResultEngine extends BaseShotResultEngine {
  public determineShotResult(skillLevel: number, swingCount: number, previousShotResultId?: number): ShotResult {
    if (previousShotResultId) {
      this.shotResult = this.getChildShotResult(previousShotResultId);
    }
    // no previous shot result or previous shot result does not have child shot result, then find a shot result
    if (!this.shotResult) {
      if ((skillLevel === 1 && swingCount >= 4) || (skillLevel === 2 && swingCount >= 3) || (skillLevel === 3 && swingCount >= 2)) {
        this.shotResult = this.shotResults.find(s => s.shotResultId === 4);
      } else {
        this.filteredShotResults = this.shotResults.filter(s => s.option.filter(o => o.par === 4
          && o.shotCount === swingCount && o.skillLevel.indexOf(skillLevel) >= 0).length > 0);

        if (previousShotResultId) {
          this.filteredShotResults = this.filteredShotResults.filter(s => s.shotResultId !== previousShotResultId);
        }

        const idx = Math.floor(Math.random() * this.filteredShotResults.length);
        this.shotResult = this.filteredShotResults[idx];
      }
    }
    return this.shotResult;
  }
}
