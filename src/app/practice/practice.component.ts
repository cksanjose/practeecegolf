import { Component, OnInit } from '@angular/core';
import { PlayerProfile } from '../shared/playerProfile';
import {PlayerProfileServiceService} from '../shared/player-profile-service.service';

@Component({
  selector: 'app-practice',
  templateUrl: './practice.component.html'
})
export class PracticeComponent implements OnInit {
  private playerProfile: PlayerProfile;

  constructor(private playerProfileServiceService: PlayerProfileServiceService) { }

  ngOnInit() {
    this.playerProfile = new PlayerProfile();
    this.playerProfile.playerProfileId = 1;
    this.playerProfileServiceService.playerProfileUpdate(this.playerProfile);
    console.log(this.playerProfile.playerProfileId);
  }

}
