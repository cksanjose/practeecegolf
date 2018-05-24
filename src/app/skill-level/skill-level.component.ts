import { Component, OnInit, OnDestroy } from '@angular/core';
import { SkillLevelService } from './skilllevel.service';
import { ISkillLevel } from '../shared/skillLevel';
import { FormGroup } from '@angular/forms';
import { PlayerProfile } from '../shared/playerProfile';
import { PlayerProfileService } from '../shared/player-profile.service';
import { Subscription } from 'rxjs/internal/Subscription';

@Component({
  selector: 'app-skill-level',
  templateUrl: './skill-level.component.html'
})
export class SkillLevelComponent implements OnInit, OnDestroy {
  private skillLevels: ISkillLevel[];
  private skillLevelsForm: FormGroup;
  private playerProfile: PlayerProfile;
  private subscription: Subscription;

  constructor(private skillLevelService: SkillLevelService, private playerProfileService: PlayerProfileService) { }

  ngOnInit(): FormGroup {

    this.skillLevelsForm = new FormGroup({

    });

    this.skillLevelService.getSkillLevels()
      .subscribe(skillLevels => {
        this.skillLevels = skillLevels;
        console.log(this.skillLevels);
      });

    return this.skillLevelsForm;
  }

  onSkillLevelChanged(entry) {
    // subscription to player profile service to detect changes
    this.subscription = this.playerProfileService.subscribePlayerProfile().subscribe(profile => {
      this.playerProfile = profile;
      this.playerProfile.skillLevelDescription = this.skillLevels[entry - 1].description;
      this.playerProfile.skillLevelId = entry;
      this.playerProfileService.playerProfileUpdate(this.playerProfile);
    });
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
