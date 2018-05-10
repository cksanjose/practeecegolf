import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PracticeComponent } from './practice.component';
import { PlayerProfileService } from "../shared/player-profile.service";

describe('PracticeComponent', () => {
  let component: PracticeComponent;
  let fixture: ComponentFixture<PracticeComponent>;
  let playerProfileServie: PlayerProfileService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PracticeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PracticeComponent);
    component = fixture.componentInstance;
    playerProfileServie = TestBed.get(PlayerProfileService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
