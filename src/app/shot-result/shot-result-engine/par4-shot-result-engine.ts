import { BaseShotResultEngine } from './base-shot-result-engine';
import { ShotResult } from '../../shared/shotResult';

export class Par4ShotResultEngine extends BaseShotResultEngine {
  determineShotResult(skillLevel: string, swingCount: number): ShotResult {
    if (skillLevel === 'Beginner') {
      if (swingCount <= 1) {
        const results = this.shotResults.filter(s => s.option.find(o => o.par === 4 && o.shotCount === swingCount));
      } else {

      }
    } else {

    }

    return new ShotResult();
  }
}
