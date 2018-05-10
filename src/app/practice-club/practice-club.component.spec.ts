import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PracticeClubComponent } from './practice-club.component';

describe('PracticeClubComponent', () => {
  let component: PracticeClubComponent;
  let fixture: ComponentFixture<PracticeClubComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PracticeClubComponent ]
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
