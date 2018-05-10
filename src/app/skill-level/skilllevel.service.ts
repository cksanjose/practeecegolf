import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ISkillLevel } from '../shared/skillLevel';

@Injectable()
export class SkillLevelService {
  private _dataUrl = 'assets/data/';

  constructor(private _http: HttpClient) { }

  getSkillLevels(): Observable<ISkillLevel[]> {
    return this._http.get<ISkillLevel[]>(this._dataUrl + 'skilllevels.json')
  }
}
