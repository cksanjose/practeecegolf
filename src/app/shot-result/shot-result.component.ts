import { Component, Input, OnInit } from '@angular/core';
import { PlayerProfileService } from "../shared/player-profile.service";
import { ShotResultService } from "./shot-result.service";
import { ShotResult } from "../shared/shotResult";
import { PlayerProfile } from "../shared/playerProfile";
import { GolfHole } from "../shared/golfHole";

@Component({
  selector: 'app-shot-result',
  templateUrl: './shot-result.component.html'
})
export class ShotResultComponent implements OnInit {

  @Input() currentGolfHole: GolfHole;

  private shotResults: ShotResult[];
  private shotResult: ShotResult;
  private playerProfile: PlayerProfile;

  constructor(private playerProfileService: PlayerProfileService,
              private shotResultService: ShotResultService) { }

  ngOnInit() {
      this.shotResultService.getShotResults().subscribe(shotResults => {
        this.shotResults = shotResults;
        this.playerProfile = this.playerProfileService.getPlayerProfile();
        console.log(this.shotResults);
      });
    }
  }


