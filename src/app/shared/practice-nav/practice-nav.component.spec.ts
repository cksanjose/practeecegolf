import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PracticeNavComponent } from './practice-nav.component';

describe('PracticeNavComponent', () => {
  let component: PracticeNavComponent;
  let fixture: ComponentFixture<PracticeNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PracticeNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PracticeNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
