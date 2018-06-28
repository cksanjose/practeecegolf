import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PracticeClubComponent } from './practice-club.component';
import {PracticeHeaderComponent} from '../shared/practice-header/practice-header.component';
import {PlayerProfileService} from '../shared/player-profile.service';

describe('PracticeClubComponent', () => {
  let component: PracticeClubComponent;
  let fixture: ComponentFixture<PracticeClubComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PracticeClubComponent,
        PracticeHeaderComponent,
        PlayerProfileService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PracticeClubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
