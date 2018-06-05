import { ShotOption } from './shotOption';

export class ShotResult {
  shotResultId: number;
  shotType: string;
  result: string;
  distanceToGreen: number;
  option: ShotOption[];
  childResult: number[];
}
