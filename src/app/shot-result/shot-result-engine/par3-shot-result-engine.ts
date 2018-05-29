import { BaseShotResultEngine } from './base-shot-result-engine';
import { ShotResult } from '../../shared/shotResult';

export class Par3ShotResultEngine extends BaseShotResultEngine {
  public determineShotResult(skillLevel: number, swingCount: number): ShotResult {
      if ((skillLevel === 2 && swingCount >= 3) || (skillLevel === 3 && swingCount >= 2)) {
          // int/advanced players with swing count of 2 or greater, gets ball on green result
          this.shotResult = this.shotResults.find(s => s.shotResultId === 4);
      } else {
          this.filteredShotResults = this.shotResults.filter(s => s.option.filter(o => o.par === 3
            && o.shotCount === swingCount && o.skillLevel.indexOf(skillLevel) >= 0));
          const idx = Math.floor(Math.random() * this.filteredShotResults.length);
          this.shotResult = this.filteredShotResults[idx];
      }

      return this.shotResult;
    }
}
