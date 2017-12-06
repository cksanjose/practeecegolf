import { Component, OnInit } from '@angular/core';
import { PlayerProfile } from "../shared/playerProfile";

@Component({
  selector: 'app-practice',
  templateUrl: './practice.component.html',
  styleUrls: ['./practice.component.css']
})
export class PracticeComponent implements OnInit {
  private playerProfile: PlayerProfile;

  constructor() { }

  ngOnInit() {
    this.playerProfile = new PlayerProfile();
    this.playerProfile.playerProfileId = 1;
  }

}
