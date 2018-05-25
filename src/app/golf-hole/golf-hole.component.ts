import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { GolfHoleService } from './golf-hole.service';
import { GolfHole } from '../shared/golfHole';
import { PlayerProfile } from '../shared/playerProfile';
import { PlayerProfileService } from '../shared/player-profile.service';
import { Subscription } from 'rxjs/internal/Subscription';

@Component({
  selector: 'app-golf-hole',
  templateUrl: './golf-hole.component.html'
})
export class GolfHoleComponent implements OnInit, OnDestroy {
  private golfHoles: GolfHole[];
  private playerProfile: PlayerProfile;
  private currentGolfHole: GolfHole;
  private subscription: Subscription;

  @Output() swingCountEvent = new EventEmitter<number>();

  constructor(private golfHoleService: GolfHoleService,
              private playerProfileService: PlayerProfileService) {

    // subscription to player profile service to detect changes
    this.playerProfile = this.playerProfileService.getPlayerProfile();
  }

  ngOnInit() {

    this.golfHoleService.getGolfHoles().subscribe(holes => {
      this.golfHoles = holes;
      const filteredGolfHoles = holes.filter(g => g.skill === this.playerProfile.skillLevelId);
      const idx = Math.floor(Math.random() * filteredGolfHoles.length);
      this.currentGolfHole = filteredGolfHoles[idx];
      console.log(this.currentGolfHole);
    });

    // emit swing count so practice nav knows about it
    this.playerProfile.practiceSession.swingCount = 1;
    this.swingCountEvent.emit(this.playerProfile.practiceSession.swingCount);

    this.playerProfile.practiceSession.golfHole = this.currentGolfHole;
    this.playerProfileService.playerProfileUpdate(this.playerProfile);
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

}
