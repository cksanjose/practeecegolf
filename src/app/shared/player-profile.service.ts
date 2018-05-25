import { Injectable } from '@angular/core';
import { PlayerProfile } from './playerProfile';
import { BehaviorSubject } from 'rxjs/index';

@Injectable()
export class PlayerProfileService {

  private playerProfile = new BehaviorSubject<PlayerProfile>(new PlayerProfile());

  // Observable string streams
  playerProfile$ = this.playerProfile.asObservable();

  constructor() { }

  public playerProfileUpdate(data: PlayerProfile) {
    if (data) {
      this.playerProfile.next(data);
      this.playerProfile.complete();
    }
  }

  public getPlayerProfile(): PlayerProfile {
    return this.playerProfile.getValue();
  }
}
