import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { ShotResult } from "../shared/shotResult";

@Injectable()
export class ShotResultService {

  private _dataUrl = "./golf/data/";

  constructor(private _http: HttpClient) { }

  getShotResults(): Observable<ShotResult[]> {
    return this._http.get<ShotResult[]>(this._dataUrl + "shotresults.json")
  }

}
