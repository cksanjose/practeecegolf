import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ShotResult } from "../shotResult";
import { PlayerProfile } from "../playerProfile";
import { GolfHole } from "../golfHole";
import { PlayerProfileService } from "../player-profile.service";

@Component({
  selector: 'app-practice-nav',
  templateUrl: './practice-nav.component.html'
})
export class PracticeNavComponent implements OnInit {

  @Input() currentGolfHole: GolfHole;

  playerProfile: PlayerProfile;

  constructor(private playerProfileService: PlayerProfileService) { }

  ngOnInit() {
    this.playerProfile = this.playerProfileService.getPlayerProfile();
    console.log(this.playerProfile.skillLevel);
    console.log(`Current golf hole: ${this.currentGolfHole.holeId}`);
  }

  showNextHole() {
    // this navigate('../golf-hole');
  }

  showResult(): ShotResult {
    return new ShotResult();
  }
}
