import { Component, OnInit } from '@angular/core';
import { PlayerProfile } from '../playerProfile';
import { PlayerProfileService } from '../player-profile.service';

@Component({
  selector: 'app-practice-header',
  templateUrl: './practice-header.component.html'
})
export class PracticeHeaderComponent implements OnInit {

  private playerProfile: PlayerProfile;

  constructor(private playerProfileService: PlayerProfileService) { }

  ngOnInit() {
    this.playerProfile = this.playerProfileService.getPlayerProfile();
  }

}
