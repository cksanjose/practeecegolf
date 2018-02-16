import { Component, OnInit, Input } from '@angular/core';
import { SkillLevelService } from './skilllevel.service';
import { ISkillLevel } from '../shared/skillLevel';
import { FormGroup } from '@angular/forms';
import { PlayerProfile } from '../shared/playerProfile';

@Component({
  selector: 'app-skill-level',
  templateUrl: './skill-level.component.html'
})
export class SkillLevelComponent implements OnInit {
  private skillLevels: ISkillLevel[];
  private skillLevelsForm;

  @Input() playerProfile: PlayerProfile;

  constructor(private skillLevelService: SkillLevelService) { }

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
    this.playerProfile.skillLevel = entry;
  }
}
