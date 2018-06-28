import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillLevelComponent } from './skill-level.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('SkillLevelComponent', () => {
  let component: SkillLevelComponent;
  let fixture: ComponentFixture<SkillLevelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkillLevelComponent,
        RouterTestingModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillLevelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
