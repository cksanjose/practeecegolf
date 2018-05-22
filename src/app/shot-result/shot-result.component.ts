import {Component, OnDestroy, OnInit} from '@angular/core';
import { PlayerProfileService } from '../shared/player-profile.service';
import { ShotResultService } from './shot-result.service';
import { ShotResult } from '../shared/shotResult';
import { PlayerProfile } from '../shared/playerProfile';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-shot-result',
  templateUrl: './shot-result.component.html'
})
export class ShotResultComponent implements OnInit, OnDestroy {

  private shotResults: ShotResult[];
  private shotResult: ShotResult;
  private playerProfile: PlayerProfile;
  private golfHoleForm: FormGroup;
  private previousHoleId: number;
  private previousSwingCount: number;
  private paramSubscribe: any;

  constructor(private playerProfileService: PlayerProfileService,
              private shotResultService: ShotResultService,
              private route: ActivatedRoute) { }

  ngOnInit(): FormGroup {
    this.golfHoleForm = new FormGroup({

    });

    this.paramSubscribe = this.route.params.subscribe(params => {
      this.previousHoleId = +params['holeId'];
      this.previousSwingCount = +params['swingCount'];
    });

    this.playerProfile = this.playerProfileService.getPlayerProfile();

    this.shotResultService.getShotResults().subscribe(shotResults => {
      this.shotResults = shotResults;
      console.log(this.shotResults);
    });

    this.playerProfile.practiceSession.swingCount = ++this.previousSwingCount;

    this.shotResult = this.shotResultService
      .getShotResult(this.playerProfile.practiceSession.golfHole,
        this.playerProfile.practiceSession.swingCount, this.playerProfile.skillLevelId);

    return this.golfHoleForm;
  }

  ngOnDestroy(): void {
    this.paramSubscribe.unsubscribe();
  }
}


