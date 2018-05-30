import { BaseShotResultEngine } from './base-shot-result-engine';
import { ShotResult } from '../../shared/shotResult';

export class Par4ShotResultEngine extends BaseShotResultEngine {
  determineShotResult(skillLevel: number, swingCount: number): ShotResult {
    if ((skillLevel === 1 && swingCount >= 4) || (skillLevel === 2 && swingCount >= 3) || (skillLevel === 3 && swingCount >= 2)) {
        this.shotResult = this.shotResults.find(s => s.shotResultId === 4);
    } else {
        this.filteredShotResults = this.shotResults.filter(s => s.option.filter(o => o.par === 4 && o.shotCount === swingCount));
        const idx = Math.floor(Math.random() * this.filteredShotResults.length);
        this.shotResult = this.filteredShotResults[idx];
        return this.shotResult;
    }
  }
}
