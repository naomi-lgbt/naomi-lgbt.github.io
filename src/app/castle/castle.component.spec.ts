import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CastleComponent } from './castle.component';

describe('CastleComponent', () => {
  let component: CastleComponent;
  let fixture: ComponentFixture<CastleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CastleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CastleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
