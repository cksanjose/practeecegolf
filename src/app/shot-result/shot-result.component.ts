import { Component, Input, OnInit } from '@angular/core';
import { PlayerProfileService } from "../shared/player-profile.service";
import { ShotResultService } from "./shot-result.service";
import { ShotResult } from "../shared/shotResult";
import { PlayerProfile } from "../shared/playerProfile";
import { GolfHole } from "../shared/golfHole";

@Component({
  selector: 'app-shot-result',
  templateUrl: './shot-result.component.html'
})
export class ShotResultComponent implements OnInit {

  @Input() currentGolfHole: GolfHole;

  private shotResults: ShotResult[];
  private shotResult: ShotResult;
  private playerProfile: PlayerProfile;

  constructor(private playerProfileService: PlayerProfileService,
              private shotResultService: ShotResultService) { }

  ngOnInit() {
      this.shotResultService.getShotResults().subscribe(shotResults => {
        this.shotResults = shotResults;
        //if par is 3 and swing is 1,
        // skill is adv/int then ball on green, ball in rough near green
        // skill is beg then ball on fairway
        //if par is 3 and swing is 2,
        // skill is adv/int, then ball on green, ball in rough near green
        // skill is beg, then ball on rough near green
        //if par is 4 or greater and swing 1,
        // skill is adv/int, then ball in fairway, ball in rough
        // skill is int, then ball in woods
        // skill is beg, then ball in woods, ball in rough
        //if par is 4 or greater and swing 2, then ball in fairway, woods (chip out), rough, ball on green, ball on rough near green
        //if par is 4 swing 3, then ball on green, ball on rough near green
        //if par is 4 swing >= 4, then ball on green, ball on rough near green
        //if par is 5 and swing 3, then ball on fairway, ball on green, ball on rough near green
        //if par is 5 and swing 4, then ball on fairway, ball on green, ball on rough near green
        //if par is 5 and swing >= 5, then ball on green, ball on rough near green
        this.playerProfile = this.playerProfileService.getPlayerProfile();
        console.log(this.shotResults);
      });
    }
  }


