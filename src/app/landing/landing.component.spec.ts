import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingComponent } from './landing.component';

describe('LandingComponent', () => {
  let component: LandingComponent;
  let fixture: ComponentFixture<LandingComponent>;
  let compiled: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LandingComponent],
    }).compileComponents();
    fixture = TestBed.createComponent(LandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    compiled = fixture.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the view correctly', () => {
    const title = compiled.querySelector('h1');
    expect(title?.textContent?.trim()).toBe('Naomi Carrigan');
    const buttons = compiled.querySelectorAll('.nes-btn');
    expect(buttons.length).toBe(2);
    expect(buttons[0].tagName).toBe('A');
    expect(buttons[0].textContent?.trim()).toBe("See Naomi's work");
    expect(buttons[0].getAttribute('href')).toBe('https://www.nhcarrigan.com');
    expect(buttons[1].tagName).toBe('A');
    expect(buttons[1].textContent?.trim()).toBe('Explore this site');
    expect(buttons[1].getAttribute('routerLink')).toBe('/approach');
  });
});
