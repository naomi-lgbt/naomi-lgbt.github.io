import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingHallComponent } from './training-hall.component';

describe('TrainingHallComponent', () => {
  let component: TrainingHallComponent;
  let fixture: ComponentFixture<TrainingHallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrainingHallComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainingHallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
