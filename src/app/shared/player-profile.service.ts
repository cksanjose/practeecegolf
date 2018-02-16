import { Injectable } from '@angular/core';
import { PlayerProfile } from './playerProfile';

@Injectable()
export class PlayerProfileService {

  private playerProfile: PlayerProfile;

  constructor() { }

  public playerProfileUpdate(data: PlayerProfile) {
    if (data) {
      this.playerProfile = data;
    }
  }

  public getPlayerProfile() {
    return this.playerProfile;
  }

}