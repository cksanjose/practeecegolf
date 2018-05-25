import {Component, EventEmitter, OnDestroy, OnInit, Output} from '@angular/core';
import { PlayerProfileService } from '../shared/player-profile.service';
import { ShotResultService } from './shot-result.service';
import { ShotResult } from '../shared/shotResult';
import { PlayerProfile } from '../shared/playerProfile';
import { ActivatedRoute } from '@angular/router';
import {Subscription} from 'rxjs/internal/Subscription';

@Component({
  selector: 'app-shot-result',
  templateUrl: './shot-result.component.html'
})

export class ShotResultComponent implements OnInit, OnDestroy {

  @Output() swingCountEvent = new EventEmitter<number>();

  private shotResult: ShotResult;
  private readonly playerProfile: PlayerProfile;
  private previousHoleId: number;
  private previousSwingCount: number;
  private paramSubscribe: any;
  private subscription: Subscription;

  constructor(private playerProfileService: PlayerProfileService,
              private shotResultService: ShotResultService,
              private route: ActivatedRoute) {
    this.playerProfile = this.playerProfileService.getPlayerProfile();
  }

  ngOnInit() {

    this.paramSubscribe = this.route.params.subscribe(params => {
      this.previousHoleId = +params['holeId'];
      this.previousSwingCount = +params['swingCount'];
    });

    this.playerProfile.practiceSession.swingCount = ++this.previousSwingCount;

    // emit swing count so practice nav knows about it
    this.swingCountEvent.emit(this.playerProfile.practiceSession.swingCount);

    this.playerProfileService.playerProfileUpdate(this.playerProfile);

    this.shotResult = this.shotResultService
      .getShotResult(this.playerProfile.practiceSession.golfHole,
        this.playerProfile.practiceSession.swingCount, this.playerProfile.skillLevelId);
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


