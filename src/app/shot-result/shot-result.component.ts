import { Component, OnInit } from '@angular/core';
import { PlayerProfileService } from "../shared/player-profile.service";
import { ShotResultService } from "./shot-result.service";

@Component({
  selector: 'app-shot-result',
  templateUrl: './shot-result.component.html'
})
export class ShotResultComponent implements OnInit {

  constructor(playerProfileService: PlayerProfileService, shotResultService: ShotResultService) { }

  ngOnInit() {

  }

}
