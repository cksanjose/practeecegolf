import { Component, OnDestroy, OnInit } from '@angular/core';
import { PlayerProfile } from '../playerProfile';
import { PlayerProfileService } from '../player-profile.service';
import { PracticeSession } from '../practiceSession';
import { Subscription } from 'rxjs/internal/Subscription';

@Component({
  selector: 'app-practice-header',
  templateUrl: './practice-header.component.html'
})
export class PracticeHeaderComponent implements OnInit, OnDestroy {

  private playerProfile: PlayerProfile;
  private practiceSession: PracticeSession;
  private swingCount: number;
  private subscription: Subscription;

  constructor(private playerProfileService: PlayerProfileService) {
    // subscription to player profile service to detect changes
    this.playerProfile = this.playerProfileService.getPlayerProfile();
  }

  ngOnInit() {
    this.practiceSession = this.playerProfile.practiceSession;
  }

  onSwing(swingCount: number) {
    swingCount ? this.swingCount = swingCount : this.swingCount = 1;
    this.practiceSession.swingCount = this.swingCount;
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
