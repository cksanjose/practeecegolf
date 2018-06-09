import {Component, EventEmitter, OnDestroy, OnInit, Output} from '@angular/core';
import { PlayerProfileService } from '../shared/player-profile.service';
import { ShotResultService } from './shot-result.service';
import { ShotResult } from '../shared/shotResult';
import { PlayerProfile } from '../shared/playerProfile';
import {ActivatedRoute, Router} from '@angular/router';
import {Subscription} from 'rxjs/internal/Subscription';
import {BaseComponent} from '../shared/base-component';

@Component({
  selector: 'app-shot-result',
  templateUrl: './shot-result.component.html'
})

export class ShotResultComponent extends BaseComponent  implements OnInit, OnDestroy {

  public shotResult: ShotResult;
  private readonly playerProfile: PlayerProfile;
  private previousHoleId: number;
  private previousSwingCount: number;
  private paramSubscribe: any;
  private subscription: Subscription;
  private ballOnGreenShotResults: number[] = [4, 9, 10];

  constructor(private playerProfileService: PlayerProfileService,
              private shotResultService: ShotResultService,
              private route: ActivatedRoute,
              private router: Router) {

    super(router);
    this.playerProfile = this.playerProfileService.getPlayerProfile();
  }

  ngOnInit() {
    if (!this.playerProfile.practiceSession) {
      this.goToHome();
    }

    this.paramSubscribe = this.route.params.subscribe(params => {
      this.previousHoleId = +params['holeId'];
      this.previousSwingCount = +params['swingCount'];
      this.playerProfile.practiceSession.swingCount = ++this.previousSwingCount;
      this.playerProfileService.playerProfileUpdate(this.playerProfile);
    });

    let shotResultId;
    if (this.playerProfile.practiceSession.previousShotResult) {
      shotResultId = this.playerProfile.practiceSession.previousShotResult.shotResultId;
    }

    this.shotResult = this.shotResultService
      .getShotResult(this.playerProfile.practiceSession.golfHole,
        this.playerProfile.practiceSession.swingCount, this.playerProfile.skillLevelId, shotResultId);

    this.playerProfile.practiceSession.isInGreen = this.ballOnGreenShotResults.indexOf(this.shotResult.shotResultId) >= 0;

    this.playerProfile.practiceSession.previousShotResult = this.shotResult;
  }

  ngOnDestroy(): void {
    if (this.paramSubscribe) {
      this.paramSubscribe.unsubscribe();
    }

    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}


