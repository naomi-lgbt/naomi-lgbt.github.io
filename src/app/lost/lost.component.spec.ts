import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LostComponent } from './lost.component';

describe('LostComponent', () => {
  let component: LostComponent;
  let fixture: ComponentFixture<LostComponent>;
  let compiled: any;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LostComponent],
    }).compileComponents();
    fixture = TestBed.createComponent(LostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    compiled = fixture.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the view correctly', () => {
    const title = compiled.querySelector('h1');
    expect(title.textContent.trim()).toBe('Lost');
    const buttons = compiled.querySelectorAll('.nes-btn');
    expect(buttons.length).toBe(1);
    expect(buttons[0].tagName).toBe('A');
    expect(buttons[0].textContent.trim()).toBe(
      'Make your way to the plaza'
    );
    expect(buttons[0].getAttribute('routerLink')).toBe('/plaza');
  });
});
