import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PracticeHeaderComponent } from './practice-header.component';
import {PlayerProfileService} from '../player-profile.service';

describe('PracticeHeaderComponent', () => {
  let component: PracticeHeaderComponent;
  let fixture: ComponentFixture<PracticeHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PracticeHeaderComponent,
        PlayerProfileService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PracticeHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
