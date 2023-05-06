import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TailorComponent } from './tailor.component';
import { HttpClientModule } from '@angular/common/http';
import { AssetsService } from '../assets.service';

describe('TailorComponent', () => {
  let component: TailorComponent;
  let fixture: ComponentFixture<TailorComponent>;
  let compiled: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TailorComponent],
      imports: [HttpClientModule],
      providers: [AssetsService],
    }).compileComponents();
    fixture = TestBed.createComponent(TailorComponent);
    component = fixture.componentInstance;
    component.outfits = [
      {
        name: 'Abyss',
        fileName: 'abyss.png',
        description:
          'Stare long into the abyss and the abyss will stare back into you.',
        alt: 'Naomi wearing a purple shirt with a strange pattern and a red plaid miniskirt.',
        credits: {
          top: 'https://booth.pm/en/items/4608652',
          skirt: 'https://booth.pm/en/items/3728335',
        },
      },
      {
        name: 'Aikido Gi',
        fileName: 'aikido.png',
        description: 'Naomi is ready to learn the sword.',
        alt: 'Naomi wearing a white kimono top with a blue hakama.',
        credits: {
          outfit: 'https://mohsu.booth.pm/items/4359515',
        },
      },
    ];
    fixture.detectChanges();
    compiled = fixture.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the view correctly', () => {
    const title = compiled.querySelector('h1');
    expect(title?.textContent?.trim()).toBe('Tailor');
    const buttons = compiled.querySelectorAll('.nes-btn');
    expect(buttons[0].tagName).toBe('BUTTON');
    expect(buttons[0].textContent?.trim()).toBe('Model Credits');
    expect(buttons[buttons.length - 1].tagName).toBe('A');
    expect(buttons[buttons.length - 1].textContent?.trim()).toBe(
      'These are nice - but time to move on'
    );
    expect(buttons[buttons.length - 1].getAttribute('routerLink')).toBe(
      '/plaza'
    );
  });

  it('should render the model credits correctly', () => {
    component.renderCredits('_default');
    fixture.detectChanges();
    const modal = compiled.querySelector('.modal');
    expect(modal).toBeDefined();
    const textElements = modal?.querySelectorAll('a');
    textElements?.forEach((el, i) => {
      expect(el.textContent?.trim()).toBe(component.defaultCredits[i][0]);
      expect(el.getAttribute('href')).toBe(component.defaultCredits[i][1]);
    });
    component.closeModal();
    fixture.detectChanges();
    const hiddenModal = compiled.querySelector('.modal');
    expect(hiddenModal).toBeNull();
  });

  it(`should render the outfits correctly`, () => {
    for (const outfit of component.outfits) {
      component.selectOutfit(String(component.outfits.indexOf(outfit)));
      fixture.detectChanges();
      const outfitBox = compiled.querySelector('.outfit');
      const imgLink = outfitBox?.querySelector('a');
      expect(imgLink?.getAttribute('href')).toBe(
        `https://cdn.naomi.lgbt/naomi/outfits/${outfit.fileName}`
      );
      expect(imgLink?.getAttribute('target')).toBe('_blank');
      const img = outfitBox?.querySelector('img');
      expect(img?.getAttribute('src')).toBe(
        `https://cdn.naomi.lgbt/naomi/outfits/${outfit.fileName}`
      );
      expect(img?.getAttribute('alt')).toBe(outfit.alt);
      const title = outfitBox?.querySelector('h2');
      expect(title?.textContent?.trim()).toBe(outfit.name);
      const description = outfitBox?.querySelector('p');
      expect(description?.textContent?.trim()).toBe(outfit.description);
      const creditButton = outfitBox?.querySelector('.nes-btn');
      expect(creditButton?.textContent?.trim()).toBe('Credits');
      component.renderCredits(outfit.name);
      fixture.detectChanges();
      const modal = compiled.querySelector('.modal');
      expect(modal).toBeDefined();
      const textElements = modal?.querySelectorAll('a');
      const textEntries = Object.entries(outfit.credits);
      if (!textEntries.length) {
        expect(textElements?.[0].textContent?.trim()).toBe(
          "We're sorry, but we're still hard at work tracking down the credits for this. Make a PR?"
        );
        expect(textElements?.[0]?.getAttribute('href')).toBe(
          'https://github.com/naomi-lgbt/naomi-lgbt.github.io/pulls'
        );
      } else {
        textElements?.forEach((el, i) => {
          expect(el.textContent?.trim()).toBe(textEntries[i][0]);
          expect(el.getAttribute('href')).toBe(textEntries[i][1]);
        });
      }
    }
  });
});
