import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CastleComponent } from './castle.component';

describe('CastleComponent', () => {
  let component: CastleComponent;
  let fixture: ComponentFixture<CastleComponent>;
  let compiled: any;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CastleComponent],
    }).compileComponents();
    fixture = TestBed.createComponent(CastleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    compiled = fixture.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the view correctly', () => {
    const title = compiled.querySelector('h1');
    expect(title.textContent.trim()).toBe('Castle');
    const buttons = compiled.querySelectorAll('.nes-btn');
    expect(buttons.length).toBe(2);
    expect(buttons[0].tagName).toBe('A');
    expect(buttons[0].textContent.trim()).toBe('Request an audience');
    expect(buttons[0].getAttribute('href')).toBe('https://calendly.com/nhcarrigan');
    expect(buttons[1].tagName).toBe('A');
    expect(buttons[1].textContent.trim()).toBe('Apologise and walk away');
    expect(buttons[1].getAttribute('routerLink')).toBe('/plaza');
  });
});
