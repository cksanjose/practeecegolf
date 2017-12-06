import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { IGolfHole } from "../shared/golfHole";

@Injectable()
export class GolfHoleService {
  private _dataUrl = "./golf/data/";

  constructor(private _http: HttpClient) { }

  getGolfHoles(): Observable<IGolfHole[]> {
    return this._http.get<IGolfHole[]>(this._dataUrl + "holes.json")
  }

}
