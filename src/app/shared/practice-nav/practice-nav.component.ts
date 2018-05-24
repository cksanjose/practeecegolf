import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import { PlayerProfile } from '../playerProfile';
import { PlayerProfileService } from '../player-profile.service';
import { Router } from '@angular/router';
import { PracticeSession } from '../practiceSession';
import { Subscription } from 'rxjs/internal/Subscription';

@Component({
  selector: 'app-practice-nav',
  templateUrl: './practice-nav.component.html'
})
export class PracticeNavComponent implements OnInit, OnDestroy {

  private playerProfile: PlayerProfile;
  private practiceSession: PracticeSession;
  private isGolfHole: boolean;
  private swingCount: number;
  private subscription: Subscription;

  constructor(private playerProfileService: PlayerProfileService,
              private router: Router) { }

  ngOnInit() {
    if (this.swingCount === undefined) {
      this.swingCount = 1;
    }
    // subscription to player profile service to detect changes
    this.subscription = this.playerProfileService.subscribePlayerProfile().subscribe(profile => {
      this.playerProfile = profile;
      this.practiceSession = this.playerProfile.practiceSession;
    });

    this.isGolfHole = this.router.url.indexOf('golfhole') > 0;
  }

  goToShotResult() {
    this.router.navigate(['../shotresult', this.practiceSession.golfHole.holeId, this.swingCount]);
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
