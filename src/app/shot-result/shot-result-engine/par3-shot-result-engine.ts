import { BaseShotResultEngine } from './base-shot-result-engine';
import { ShotResult } from '../../shared/shotResult';

export class Par3ShotResultEngine extends BaseShotResultEngine {
  public determineShotResult(skillLevel: string, swingCount: number): ShotResult {
      this.filteredShotResults = this.shotResults.filter(s => s.option.filter(o => o.par === 3 && o.shotCount === swingCount));
      const idx = Math.floor(Math.random() * this.filteredShotResults.length);
      this.shotResult = this.filteredShotResults[idx];
      return this.shotResult;
    }
}
