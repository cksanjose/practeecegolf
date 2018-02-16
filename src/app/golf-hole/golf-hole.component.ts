import { Component, Input, OnInit } from '@angular/core';
import { GolfHoleService } from './golf-hole.service';
import { IGolfHole } from '../shared/golfHole';
import { PlayerProfile } from '../shared/playerProfile';
import { PlayerProfileService } from '../shared/player-profile.service';

@Component({
  selector: 'app-golf-hole',
  templateUrl: './golf-hole.component.html'
})
export class GolfHoleComponent implements OnInit {
  private golfHoles: IGolfHole[];
  private playerProfile: PlayerProfile;

  constructor(private golfHoleService: GolfHoleService,
              private playerProfileService: PlayerProfileService) { }

  ngOnInit() {
    this.golfHoleService.getGolfHoles().subscribe(holes => {
      this.golfHoles = holes;
      this.playerProfile = this.playerProfileService.getPlayerProfile();
      const filteredGolfHoles = this.golfHoles.filter(g => g.skill === this.playerProfile.skillLevel);
      const idx = Math.floor(Math.random() * filteredGolfHoles.length);
      console.log(filteredGolfHoles);
      console.log(filteredGolfHoles[idx]);
    });
  }

}
