import { SkillLevelTypes } from "./skillLeveTypes";

export class IGolfHole {
  holeId: number;
  distance: number;
  par: number;
  skill: SkillLevelTypes;
  hazard: string;
  averageSwingsToGreen: number;
}
