import { Component, OnInit } from '@angular/core';
import { PlayerProfile } from '../playerProfile';
import { PlayerProfileService } from '../player-profile.service';
import { PracticeSession } from '../practiceSession';

@Component({
  selector: 'app-practice-header',
  templateUrl: './practice-header.component.html'
})
export class PracticeHeaderComponent implements OnInit {

  private playerProfile: PlayerProfile;
  private practiceSession: PracticeSession;
  private swingCount: number;

  constructor(private playerProfileService: PlayerProfileService) { }

  ngOnInit() {
    this.playerProfile = this.playerProfileService.getPlayerProfile();
    this.practiceSession = this.playerProfile.practiceSession;
  }

  onSwing(swingCount: number) {
    swingCount ? this.swingCount = swingCount : this.swingCount = 1;
    this.practiceSession.swingCount = this.swingCount;
  }
}
