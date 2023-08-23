import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TempleComponent } from './temple.component';

describe('TempleComponent', () => {
  let component: TempleComponent;
  let fixture: ComponentFixture<TempleComponent>;
  let compiled: HTMLElement;

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
    expect(title?.textContent?.trim()).toBe('Temple');
    const buttons = compiled.querySelectorAll('.nes-btn');
    expect(buttons.length).toBe(5);
    expect(buttons[0].tagName).toBe('A');
    expect(buttons[0].textContent?.trim()).toBe('Patreon');
    expect(buttons[0].getAttribute('href')).toBe(
      'https://links.nhcarrigan.com/patreon'
    );
    expect(buttons[1].tagName).toBe('A');
    expect(buttons[1].textContent?.trim()).toBe('GitHub');
    expect(buttons[1].getAttribute('href')).toBe(
      'https://github.com/sponsors/naomi-lgbt'
    );
    expect(buttons[2].tagName).toBe('A');
    expect(buttons[2].textContent?.trim()).toBe('Ko-Fi');
    expect(buttons[2].getAttribute('href')).toBe(
      'https://links.nhcarrigan.com/kofi'
    );
    expect(buttons[3].tagName).toBe('A');
    expect(buttons[3].textContent?.trim()).toBe('PayPal');
    expect(buttons[3].getAttribute('href')).toBe(
      'https://links.nhcarrigan.com/paypal'
    );
    expect(buttons[4].tagName).toBe('A');
    expect(buttons[4].textContent?.trim()).toBe(
      "You're out of coins - maybe next time"
    );
    expect(buttons[4].getAttribute('routerLink')).toBe('/plaza');
  });

  it('should render all the dialogues', () => {
    const dialogues = compiled.querySelectorAll('.dialogue');
    expect(dialogues.length).toBe(3);
    expect(dialogues[0]?.textContent?.trim()).toBe('Please, come over.');
    expect(dialogues[0]?.querySelector('img')?.getAttribute('src')).toBe(
      'assets/img/melody/smile.png'
    );
    expect(dialogues[1]?.textContent?.trim()).toBe(
      "For the townsfolk, a place of worship. But for travellers like you? It's a different story."
    );
    expect(dialogues[1]?.querySelector('img')?.getAttribute('src')).toBe(
      'assets/img/melody/shrug.png'
    );
    expect(dialogues[2]?.textContent?.trim()).toBe(
      'Travellers such as yourself often leave coins behind, to help support the work Naomi does. It also pays my salary!'
    );
    expect(dialogues[2]?.querySelector('img')?.getAttribute('src')).toBe(
      'assets/img/melody/wink.png'
    );
  });
});
