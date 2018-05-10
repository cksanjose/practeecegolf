import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShotResultComponent } from './shot-result.component';

describe('ShotResultComponent', () => {
  let component: ShotResultComponent;
  let fixture: ComponentFixture<ShotResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShotResultComponent ]
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
