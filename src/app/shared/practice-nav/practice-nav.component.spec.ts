import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PracticeNavComponent } from './practice-nav.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('PracticeNavComponent', () => {
  let component: PracticeNavComponent;
  let fixture: ComponentFixture<PracticeNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        PracticeNavComponent
      ],
      imports: [
        RouterTestingModule ]
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
