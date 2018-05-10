import { Component, OnInit, Input } from '@angular/core';
import { SkillLevelService } from './skilllevel.service';
import { ISkillLevel } from '../shared/skillLevel';
import { FormGroup } from '@angular/forms';
import { PlayerProfile } from '../shared/playerProfile';
import { PlayerProfileService } from '../shared/player-profile.service';
import { SkillLevelTypes } from '../shared/skillLeveTypes';

@Component({
  selector: 'app-skill-level',
  templateUrl: './skill-level.component.html'
})
export class SkillLevelComponent implements OnInit {
  private skillLevels: ISkillLevel[];
  private skillLevelsForm: FormGroup;

  @Input() playerProfile: PlayerProfile;

  constructor(private skillLevelService: SkillLevelService, private playerProfileService: PlayerProfileService) { }

  ngOnInit(): FormGroup {

    this.skillLevelsForm = new FormGroup({

    });

    this.skillLevelService.getSkillLevels()
      .subscribe(skillLevels => {
        this.skillLevels = skillLevels;
        console.log(this.skillLevels);
      });

    console.log(this.playerProfile.skillLevel);

    return this.skillLevelsForm;
  }

  onSkillLevelChanged(entry) {
    this.playerProfile.skillLevel = SkillLevelTypes[entry];
    this.playerProfileService.playerProfileUpdate(this.playerProfile);
  }
}
