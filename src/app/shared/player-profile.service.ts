import { Injectable } from '@angular/core';
import { PlayerProfile } from './playerProfile';
import { Subject } from 'rxjs/internal/Subject';
import { Observable } from 'rxjs/internal/Observable';

@Injectable()
export class PlayerProfileService {

  private playerProfile = new Subject<PlayerProfile>();

  constructor() { }

  public playerProfileUpdate(data: PlayerProfile) {
    if (data) {
      this.playerProfile.next(data);
    }
  }

  public subscribePlayerProfile(): Observable<PlayerProfile> {
    return this.playerProfile;
  }

}
