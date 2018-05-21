import { Component, Input, OnInit } from '@angular/core';
import { PlayerProfile } from "../playerProfile";
import { PlayerProfileService } from "../player-profile.service";
import { Router } from "@angular/router";
import {PracticeSession} from '../practiceSession';

@Component({
  selector: 'app-practice-nav',
  templateUrl: './practice-nav.component.html'
})
export class PracticeNavComponent implements OnInit {

  private playerProfile: PlayerProfile;
  private practiceSession: PracticeSession;
  private isGolfHole: boolean;

  constructor(private playerProfileService: PlayerProfileService,
              private router: Router) { }

  ngOnInit() {
    this.playerProfile = this.playerProfileService.getPlayerProfile();
    this.practiceSession = this.playerProfile.practiceSession;
    console.log(this.playerProfile.skillLevelId);
    this.isGolfHole = this.router.url.indexOf("golfhole") > 0;
  }
}
