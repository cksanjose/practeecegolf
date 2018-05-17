import { BaseShotResultEngine } from './base-shot-result-engine';
import { ShotResult } from '../../shared/shotResult';

export class Par3ShotResultEngine extends BaseShotResultEngine {
  public determineShotResult(skillLevel: string, swingCount: number): ShotResult {
    if (skillLevel === 'Beginner') {
      if (swingCount <= 1) {
          const results = this.shotResults.filter(s => s.option.filter(o => o.par === 3 && o.shotCount === swingCount));
      } else {
        // intermediate or advanced
      }
    }
    return new ShotResult();
  }
}
