import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { ShotResult } from "../shared/shotResult";
import { GolfHole } from "../shared/golfHole";
import { ISkillLevel } from "../shared/skillLevel";
import { SkillLevelTypes } from "../shared/skillLeveTypes";

@Injectable()
export class ShotResultService {

  private _dataUrl = "./golf/data/";

  constructor(private _http: HttpClient) { }

  getShotResults(): Observable<ShotResult[]> {
    return this._http.get<ShotResult[]>(this._dataUrl + "shotresults.json")
  }

  getShotResult(golfHole: GolfHole, swing: number, skillLevel: ISkillLevel): ShotResult {
    switch (golfHole.par) {
      case 3:
        if (skillLevel.skillLevelId === SkillLevelTypes.Beginner) {
          if (swing <= 1){

          } else {

          }
        } else {

        }

        break;

      case 4:
        if (skillLevel.skillLevelId === SkillLevelTypes.Beginner) {
          if (swing <= 1){

          } else {

          }
        } else {

        }
        break;

      case 5:
        if (skillLevel.skillLevelId === SkillLevelTypes.Beginner) {
          if (swing <= 1){

          } else {

          }
        } else {

        }
        break;
    }
    //if par is 3 and swing is 1,
    // skill is adv/int then ball on green, ball in rough near green
    // skill is beg then ball on fairway
    //if par is 3 and swing is 2,
    // skill is adv/int, then ball on green, ball in rough near green
    // skill is beg, then ball on rough near green
    //if par is 4 or greater and swing 1,
    // skill is adv/int, then ball in fairway, ball in rough
    // skill is int, then ball in woods
    // skill is beg, then ball in woods, ball in rough
    //if par is 4 or greater and swing 2, then ball in fairway, woods (chip out), rough, ball on green, ball on rough near green
    //if par is 4 swing 3, then ball on green, ball on rough near green
    //if par is 4 swing >= 4, then ball on green, ball on rough near green
    //if par is 5 and swing 3, then ball on fairway, ball on green, ball on rough near green
    //if par is 5 and swing 4, then ball on fairway, ball on green, ball on rough near green
    //if par is 5 and swing >= 5, then ball on green, ball on rough near green


    return new ShotResult();
  }

}
