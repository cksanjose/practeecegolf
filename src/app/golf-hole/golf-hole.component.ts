import { Component, Input, OnInit } from '@angular/core';
import { GolfHoleService } from './golf-hole.service';
import { IGolfHole } from '../shared/golfHole';
import { PlayerProfile } from '../shared/playerProfile';
import { PlayerProfileServiceService } from '../shared/player-profile-service.service';

@Component({
  selector: 'app-golf-hole',
  templateUrl: './golf-hole.component.html'
})
export class GolfHoleComponent implements OnInit {
  private golfHoles: IGolfHole[];
  private playerProfile: PlayerProfile;

  constructor(private golfHoleService: GolfHoleService,
              private playerProfileServiceService: PlayerProfileServiceService) { }

  ngOnInit() {
    this.golfHoleService.getGolfHoles().subscribe(holes => {
      this.golfHoles = holes;
      console.log(this.golfHoles);
    });

    this.playerProfile = this.playerProfileServiceService.getPlayerProfile();
    console.log(this.playerProfile);
  }

}
