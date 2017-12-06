import { Component, OnInit } from '@angular/core';
import { SkillLevelService } from "./skilllevel.service";
import { ISkillLevel } from "../shared/skillLevel";
import { FormGroup } from "@angular/forms";

@Component({
  selector: 'app-skill-level',
  templateUrl: './skill-level.component.html',
  styleUrls: ['./skill-level.component.css']
})
export class SkillLevelComponent implements OnInit {
  private skillLevels: ISkillLevel[];
  private skillLevelsForm;

  constructor(private skillLevelService: SkillLevelService) { }

  ngOnInit(): FormGroup {

    this.skillLevelsForm = new FormGroup({

    });

    this.skillLevelService.getSkillLevels()
      .subscribe(skillLevels => this.skillLevels = skillLevels);

    return this.skillLevelsForm;
  }

}
