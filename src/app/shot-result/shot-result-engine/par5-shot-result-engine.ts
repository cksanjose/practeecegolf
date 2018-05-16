import {BaseShotResultEngine} from './base-shot-result-engine';
import { ISkillLevel } from '../../shared/skillLevel';
import { ShotResult } from '../../shared/shotResult';

export class Par5ShotResultEngine extends BaseShotResultEngine {
    public determineShotResult(skillLevel: ISkillLevel, swingCount: number): ShotResult {
        throw new Error("Method not implemented.");
    }
}
