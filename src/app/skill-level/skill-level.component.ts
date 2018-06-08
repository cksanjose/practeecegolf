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
  public skillLevels: ISkillLevel[];
  public skillLevelsForm: FormGroup;
  public playerProfile: PlayerProfile;
  private subscription: Subscription;
  public skillLevelSelected: boolean;

  constructor(private skillLevelService: SkillLevelService, private playerProfileService: PlayerProfileService) {
    this.playerProfile = this.playerProfileService.getPlayerProfile();
  }

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
    this.playerProfile.skillLevelDescription = this.skillLevels[entry - 1].description;
    this.playerProfile.skillLevelId = entry;
    this.playerProfileService.playerProfileUpdate(this.playerProfile);
    this.skillLevelSelected = true;
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
