import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { GolfHoleService } from './golf-hole.service';
import { GolfHole } from '../shared/golfHole';
import { PlayerProfile } from '../shared/playerProfile';
import { PlayerProfileService } from '../shared/player-profile.service';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-golf-hole',
  templateUrl: './golf-hole.component.html'
})
export class GolfHoleComponent implements OnInit {
  private golfHoles: GolfHole[];
  private playerProfile: PlayerProfile;
  private golfHoleForm: FormGroup;
  private currentGolfHole: GolfHole;

  @Output() selectedGolfHole = new EventEmitter<GolfHole>();

  constructor(private golfHoleService: GolfHoleService,
              private playerProfileService: PlayerProfileService) { }

  ngOnInit(): FormGroup {
    this.golfHoleForm = new FormGroup({

    });

    this.playerProfile = this.playerProfileService.getPlayerProfile();
    this.playerProfile.practiceSession.swingCount = 0;

    this.golfHoleService.getGolfHoles().subscribe(holes => {
      this.golfHoles = holes;
      const filteredGolfHoles = holes.filter(g => g.skill === this.playerProfile.skillLevel);
      const idx = Math.floor(Math.random() * filteredGolfHoles.length);
      this.currentGolfHole = filteredGolfHoles[idx];
      console.log(this.currentGolfHole);
      this.selectedGolfHole.emit(this.currentGolfHole);
      this.playerProfile.practiceSession.golfHole = this.currentGolfHole;
    });

    return this.golfHoleForm;
  }

}
