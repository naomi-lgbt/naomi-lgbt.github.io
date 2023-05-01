import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FontAwesomeTestingModule } from '@fortawesome/angular-fontawesome/testing';
import { socials } from '../../data/socials';

import { SocialsComponent } from './socials.component';

describe('SocialsComponent', () => {
  let component: SocialsComponent;
  let fixture: ComponentFixture<SocialsComponent>;
  let compiled: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SocialsComponent],
      imports: [FontAwesomeTestingModule],
    }).compileComponents();
    fixture = TestBed.createComponent(SocialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    compiled = fixture.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the view correctly', () => {
    const title = compiled.querySelector('h1');
    expect(title?.textContent?.trim()).toBe('Socials');
    const intro = compiled.querySelector('p');
    expect(intro?.textContent?.trim()).toBe(
      'You can find Naomi primarily on these platforms. Visit the tavern to see ALL of her verified accounts.'
    );
    const buttons = compiled.querySelectorAll('.nes-btn');
    expect(buttons[0].tagName).toBe('A');
    expect(buttons[0].textContent?.trim()).toBe('Explore more about Naomi');
    expect(buttons[0].getAttribute('routerLink')).toBe('/plaza');
    const socialButtons = compiled.querySelectorAll('.social');
    expect(socialButtons.length).toBe(socials.length);
  });

  for (const social of socials) {
    const index = socials.findIndex((s) => s === social);
    it(`should render the ${social.name} button correctly`, () => {
      const socialButtons = compiled.querySelectorAll('.social');
      const socialButton = socialButtons[index];
      const text = socialButton.querySelector('p');
      expect(text?.textContent?.trim()).toBe(social.name);
      const icon = socialButton.querySelector('svg');
      expect(icon).toBeTruthy();
    });
  }
});
