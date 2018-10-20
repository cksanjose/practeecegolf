import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShotResultComponent } from './shot-result.component';
import { PracticeHeaderComponent } from '../shared/practice-header/practice-header.component';
import { PracticeNavComponent } from '../shared/practice-nav/practice-nav.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('ShotResultComponent', () => {
  let component: ShotResultComponent;
  let fixture: ComponentFixture<ShotResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShotResultComponent,
        PracticeHeaderComponent,
        PracticeNavComponent,
        RouterTestingModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShotResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
