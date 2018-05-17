import { Component, Input, OnInit } from '@angular/core';
import { PlayerProfile } from "../playerProfile";
import { PlayerProfileService } from "../player-profile.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-practice-nav',
  templateUrl: './practice-nav.component.html'
})
export class PracticeNavComponent implements OnInit {

  playerProfile: PlayerProfile;
  isGolfHole: boolean;

  constructor(private playerProfileService: PlayerProfileService,
              private router: Router) { }

  ngOnInit() {
    this.playerProfile = this.playerProfileService.getPlayerProfile();
    console.log(this.playerProfile.skillLevel);
    this.isGolfHole = this.router.url.indexOf("golfhole") > 0;
  }
}
