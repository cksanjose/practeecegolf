import { Component, Input, OnInit } from '@angular/core';
import { PlayerProfile } from "../playerProfile";
import { GolfHole } from "../golfHole";
import { PlayerProfileService } from "../player-profile.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-practice-nav',
  templateUrl: './practice-nav.component.html'
})
export class PracticeNavComponent implements OnInit {

  @Input() currentGolfHole: GolfHole;

  playerProfile: PlayerProfile;
  isGolfHole: boolean;

  constructor(private playerProfileService: PlayerProfileService,
              private router: Router) { }

  ngOnInit() {
    this.playerProfile = this.playerProfileService.getPlayerProfile();
    console.log(this.playerProfile.skillLevel);
    console.log(this.currentGolfHole);
    this.isGolfHole = this.router.url.indexOf("golfhole") > 0;
  }
}
