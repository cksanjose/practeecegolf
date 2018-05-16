import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ShotResult } from '../shared/shotResult';
import { GolfHole } from '../shared/golfHole';
import { ISkillLevel } from '../shared/skillLevel';
import { Par3ShotResultEngine } from './shot-result-engine/par3-shot-result-engine';
import { Par4ShotResultEngine} from './shot-result-engine/par4-shot-result-engine';
import { BaseShotResultEngine } from './shot-result-engine/base-shot-result-engine';
import { Par5ShotResultEngine } from './shot-result-engine/par5-shot-result-engine';
import * as shotResults from '../../assets/data/shotresults.json';

@Injectable()
export class ShotResultService {

  private _dataUrl = 'assets/data/';
  private shotResultEngine: BaseShotResultEngine;

  constructor(private _http: HttpClient) { }

  getShotResults(): Observable<ShotResult[]> {
    return this._http.get<ShotResult[]>(this._dataUrl + 'shotresults.json')
  }

  getShotResult(golfHole: GolfHole, swing: number, skillLevel: ISkillLevel): ShotResult {

    console.log(shotResults.default);
    this.shotResultEngine.shotResults = shotResults.default;

    switch (golfHole.par) {
      case 3:
        this.shotResultEngine = new Par3ShotResultEngine();
        return this.shotResultEngine.determineShotResult(skillLevel, swing);

      case 4:
        this.shotResultEngine = new Par4ShotResultEngine();
        return this.shotResultEngine.determineShotResult(skillLevel, swing);

      case 5:
        this.shotResultEngine = new Par5ShotResultEngine();
        return this.shotResultEngine.determineShotResult(skillLevel, swing);
    }
    // if par is 3 and swing is 1,
    // skill is adv/int then ball on green, ball in rough near green
    // skill is beg then ball on fairway
    // if par is 3 and swing is 2,
    // skill is adv/int, then ball on green, ball in rough near green
    // skill is beg, then ball on rough near green
    // if par is 4 or greater and swing 1,
    // skill is adv/int, then ball in fairway, ball in rough
    // skill is int, then ball in woods
    // skill is beg, then ball in woods, ball in rough
    // if par is 4 or greater and swing 2, then ball in fairway, woods (chip out), rough, ball on green, ball on rough near green
    // if par is 4 swing 3, then ball on green, ball on rough near green
    // if par is 4 swing >= 4, then ball on green, ball on rough near green
    // if par is 5 and swing 3, then ball on fairway, ball on green, ball on rough near green
    // if par is 5 and swing 4, then ball on fairway, ball on green, ball on rough near green
    // if par is 5 and swing >= 5, then ball on green, ball on rough near green
  }

}
