import { Component, OnDestroy, OnInit } from '@angular/core';
import { PlayerProfile } from '../playerProfile';
import { PlayerProfileService } from '../player-profile.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs/internal/Subscription';

@Component({
  selector: 'app-practice-nav',
  templateUrl: './practice-nav.component.html'
})
export class PracticeNavComponent implements OnInit, OnDestroy {

  private playerProfile: PlayerProfile;
  private isGolfHole: boolean;
  private swingCount: number;
  private readonly subscription: Subscription;
  public isInGreen: boolean;

  constructor(private playerProfileService: PlayerProfileService,
              private router: Router) {

    // subscription to player profile service to detect changes
    this.playerProfile = this.playerProfileService.getPlayerProfile();
  }

  ngOnInit() {
    if (this.swingCount === undefined) {
      this.swingCount = 1;
    }
    this.isInGreen = this.playerProfile.practiceSession.isInGreen;
    this.isGolfHole = this.router.url.indexOf('golfhole') > 0;
  }

  goToShotResult() {
    if (this.router.navigated === false) {
      // Case when route was not used yet
      this.router.navigate(['../shotresult', this.playerProfile.practiceSession.golfHole.holeId, this.playerProfile.practiceSession.swingCount]);
    } else {
      // Case when route was used once or more then route to home and then route shot result
      this.router.navigateByUrl(`/index`).then(
        () => {
          this.router.navigate(['../shotresult', this.playerProfile.practiceSession.golfHole.holeId, this.playerProfile.practiceSession.swingCount]);
        });
    }
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
