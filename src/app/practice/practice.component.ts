import { Component, OnInit } from '@angular/core';
import { PlayerProfile } from '../shared/playerProfile';
import { PlayerProfileService } from '../shared/player-profile.service';

@Component({
  selector: 'app-practice',
  templateUrl: './practice.component.html'
})
export class PracticeComponent implements OnInit {
  private playerProfile: PlayerProfile;

  constructor(private playerProfileService: PlayerProfileService) { }

  ngOnInit() {
    this.playerProfile = new PlayerProfile();
    this.playerProfile.playerProfileId = 1;
    this.playerProfileService.playerProfileUpdate(this.playerProfile);
    console.log(this.playerProfile.playerProfileId);
  }

}
