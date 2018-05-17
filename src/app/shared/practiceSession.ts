import { GolfHole } from './golfHole';

export class PracticeSession {
  golfHole: GolfHole;
  swingCount: number;

  constructor() {
    this.golfHole = new GolfHole();
    this.swingCount = 0;
  }
}
