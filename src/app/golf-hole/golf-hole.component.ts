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

  @Output() swingCountEvent = new EventEmitter<number>();

  constructor(private golfHoleService: GolfHoleService,
              private playerProfileService: PlayerProfileService) { }

  ngOnInit(): FormGroup {
    this.golfHoleForm = new FormGroup({

    });

    this.playerProfile = this.playerProfileService.getPlayerProfile();

    this.golfHoleService.getGolfHoles().subscribe(holes => {
      this.golfHoles = holes;
      const filteredGolfHoles = holes.filter(g => g.skill === this.playerProfile.skillLevelId);
      const idx = Math.floor(Math.random() * filteredGolfHoles.length);
      this.currentGolfHole = filteredGolfHoles[idx];
      console.log(this.currentGolfHole);

      // emit swing count so practice nav knows about it
      this.swingCountEvent.emit(this.playerProfile.practiceSession.swingCount);

      this.playerProfile.practiceSession.golfHole = this.currentGolfHole;
    });

    return this.golfHoleForm;
  }

}
