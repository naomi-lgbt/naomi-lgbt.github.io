import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Outfits } from 'src/assets/data/outfits';
import { outfitsFiles } from 'src/assets/fileList';

import { TailorComponent } from './tailor.component';

describe('TailorComponent', () => {
  let component: TailorComponent;
  let fixture: ComponentFixture<TailorComponent>;
  let compiled: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TailorComponent],
    }).compileComponents();
    fixture = TestBed.createComponent(TailorComponent);
    component = fixture.componentInstance;
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

  for (const outfit of Outfits) {
    it(`should render the ${outfit.fileName} outfit`, () => {
      component.selectOutfit(String(Outfits.indexOf(outfit)));
      fixture.detectChanges();
      const outfitBox = compiled.querySelector('.outfit');
      const imgLink = outfitBox?.querySelector('a');
      expect(imgLink?.getAttribute('href')).toBe(
        `/assets/img/outfits/${outfit.fileName}`
      );
      expect(imgLink?.getAttribute('target')).toBe('_blank');
      const img = outfitBox?.querySelector('img');
      expect(img?.getAttribute('src')).toBe(
        `/assets/img/outfits/${outfit.fileName}`
      );
      expect(img?.getAttribute('alt')).toBe(outfit.alt);
      const title = outfitBox?.querySelector('h2');
      expect(title?.textContent?.trim()).toBe(outfit.name);
      const description = outfitBox?.querySelector('p');
      expect(description?.textContent?.trim()).toBe(outfit.description);
      const creditButton = outfitBox?.querySelector('.nes-btn');
      expect(creditButton?.textContent?.trim()).toBe('Credits');
    });

    it(`should render the ${outfit.fileName} credits`, () => {
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
    });
  }

  it(`should have data for all outfits`, () => {
    expect(Outfits.length).toBe(outfitsFiles.length);
  });

  for (const file of outfitsFiles) {
    it(`should display the ${file} outfit`, () => {
      const outfitData = Outfits.find((outfit) => outfit.fileName === file);
      expect(outfitData).toBeDefined();
    });
  }
});
