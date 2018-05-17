import { BaseShotResultEngine } from './base-shot-result-engine';
import { ShotResult } from '../../shared/shotResult';

export class Par3ShotResultEngine extends BaseShotResultEngine {
  public determineShotResult(skillLevel: string, swingCount: number): ShotResult {
    if (skillLevel === 'Beginner') {
      if (swingCount <= 1) {

      } else {

      }
    } else {

    }
    return new ShotResult();
  }
}
