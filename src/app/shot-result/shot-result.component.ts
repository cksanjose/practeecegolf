import { Component, Input, OnInit } from '@angular/core';
import { PlayerProfileService } from '../shared/player-profile.service';
import { ShotResultService } from './shot-result.service';
import { ShotResult } from '../shared/shotResult';
import { PlayerProfile } from '../shared/playerProfile';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-shot-result',
  templateUrl: './shot-result.component.html'
})
export class ShotResultComponent implements OnInit {

  private shotResults: ShotResult[];
  private shotResult: ShotResult;
  private playerProfile: PlayerProfile;
  private golfHoleForm: FormGroup;

  constructor(private playerProfileService: PlayerProfileService,
              private shotResultService: ShotResultService) { }

  ngOnInit(): FormGroup {
      this.golfHoleForm = new FormGroup({

      });

      this.playerProfile = this.playerProfileService.getPlayerProfile();
      this.shotResultService.getShotResults().subscribe(shotResults => {
        this.shotResults = shotResults;
        console.log(this.shotResults);
      });

      this.playerProfile.practiceSession.swingCount++;

      this.shotResult = this.shotResultService
        .getShotResult(this.playerProfile.practiceSession.golfHole,
          this.playerProfile.practiceSession.swingCount, this.playerProfile.skillLevelId);

      return this.golfHoleForm;
    }
  }


