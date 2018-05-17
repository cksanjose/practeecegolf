import {BaseShotResultEngine} from './base-shot-result-engine';
import { ShotResult } from '../../shared/shotResult';

export class Par5ShotResultEngine extends BaseShotResultEngine {
    public determineShotResult(skillLevel: string, swingCount: number): ShotResult {
      if (skillLevel === 'Beginner') {
        if (swingCount <= 1) {
          const results = this.shotResults.filter(s => s.option.find(o => o.par === 5 && o.shotCount === swingCount));
        } else {

        }
      } else {

      }
      return new ShotResult();
    }
}
