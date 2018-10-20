import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GolfHoleComponent } from './golf-hole.component';
import { PracticeHeaderComponent } from '../shared/practice-header/practice-header.component';
import { PracticeNavComponent } from '../shared/practice-nav/practice-nav.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('GolfHoleComponent', () => {
  let component: GolfHoleComponent;
  let fixture: ComponentFixture<GolfHoleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GolfHoleComponent,
        PracticeHeaderComponent,
        PracticeNavComponent,
        RouterTestingModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GolfHoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
