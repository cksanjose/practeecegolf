import { Component, OnInit } from '@angular/core';
import { PlayerProfile } from '../shared/playerProfile';
import { PlayerProfileService } from '../shared/player-profile.service';
import { PracticeSession } from '../shared/practiceSession';

@Component({
  selector: 'app-practice',
  templateUrl: './practice.component.html'
})
export class PracticeComponent implements OnInit {
  private playerProfile: PlayerProfile;

  constructor(private playerProfileService: PlayerProfileService) {
    this.playerProfile = new PlayerProfile();
    this.playerProfile.playerProfileId = 1;
    this.playerProfile.practiceSession = new PracticeSession();
    this.playerProfileService.playerProfileUpdate(this.playerProfile);
  }

  ngOnInit() {

  }

}
