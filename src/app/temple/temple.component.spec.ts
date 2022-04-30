import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TempleComponent } from './temple.component';

describe('TempleComponent', () => {
  let component: TempleComponent;
  let fixture: ComponentFixture<TempleComponent>;
  let compiled: any;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TempleComponent],
    }).compileComponents();
    fixture = TestBed.createComponent(TempleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    compiled = fixture.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the view', () => {
    const title = compiled.querySelector('h1');
    expect(title.textContent.trim()).toBe('Temple');
    const buttons = compiled.querySelectorAll('.nes-btn');
    expect(buttons.length).toBe(5);
    expect(buttons[0].tagName).toBe('A');
    expect(buttons[0].textContent.trim()).toBe('Patreon');
    expect(buttons[0].getAttribute('href')).toBe(
      'https://links.nhcarrigan.com/patreon'
    );
    expect(buttons[1].tagName).toBe('A');
    expect(buttons[1].textContent.trim()).toBe('GitHub');
    expect(buttons[1].getAttribute('href')).toBe(
      'https://links.nhcarrigan.com/github'
    );
    expect(buttons[2].tagName).toBe('A');
    expect(buttons[2].textContent.trim()).toBe('Ko-Fi');
    expect(buttons[2].getAttribute('href')).toBe(
      'https://links.nhcarrigan.com/kofi'
    );
    expect(buttons[3].tagName).toBe('A');
    expect(buttons[3].textContent.trim()).toBe('PayPal');
    expect(buttons[3].getAttribute('href')).toBe(
      'https://links.nhcarrigan.com/paypal'
    );
    expect(buttons[4].tagName).toBe('A');
    expect(buttons[4].textContent.trim()).toBe(
      "You're out of coins - maybe next time"
    );
    expect(buttons[4].getAttribute('routerLink')).toBe('/plaza');
  });
});
