import { GolfHole } from './golfHole';
import {ShotResult} from './shotResult';

export class PracticeSession {
  golfHole: GolfHole;
  swingCount: number;
  previousShotResult: ShotResult;

  constructor() {
    this.golfHole = new GolfHole();
    this.swingCount = 0;
  }
}
