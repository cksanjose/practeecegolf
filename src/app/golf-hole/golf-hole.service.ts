import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { GolfHole } from "../shared/golfHole";

@Injectable()
export class GolfHoleService {
  private _dataUrl = "./golf/data/";
  private currentGolfHole: GolfHole;

  constructor(private _http: HttpClient) { }

  getGolfHoles(): Observable<GolfHole[]> {
    return this._http.get<GolfHole[]>(this._dataUrl + "holes.json");
  }

  getGolfHole(skillLevel: string): GolfHole | null {
    this.getGolfHoles().subscribe(holes => {
        const filteredGolfHoles = holes.filter(g => g.skill === skillLevel);
        const idx = Math.floor(Math.random() * filteredGolfHoles.length);
        this.currentGolfHole = filteredGolfHoles[idx];
    });
    return this.currentGolfHole;
  }
}
