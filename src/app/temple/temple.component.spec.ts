import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TempleComponent } from './temple.component';

describe('TempleComponent', () => {
  let component: TempleComponent;
  let fixture: ComponentFixture<TempleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TempleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TempleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
