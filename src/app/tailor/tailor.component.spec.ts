import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Outfits } from 'src/assets/data/outfits';

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
    expect(buttons.length).toBe(1);
    expect(buttons[0].tagName).toBe('A');
    expect(buttons[0].textContent?.trim()).toBe(
      'These are nice - but time to move on'
    );
    expect(buttons[0].getAttribute('routerLink')).toBe('/plaza');
  });

  for (const outfit of Outfits) {
    it(`should render the ${outfit.fileName} outfit`, () => {
      const outfitBox =
        compiled.querySelectorAll('.outfit')[Outfits.indexOf(outfit)];
      const imgLink = outfitBox.querySelector('a');
      expect(imgLink?.getAttribute('href')).toBe(
        `/assets/img/outfits/${outfit.fileName}`
      );
      expect(imgLink?.getAttribute('target')).toBe('_blank');
      const img = outfitBox.querySelector('img');
      expect(img?.getAttribute('src')).toBe(
        `/assets/img/outfits/${outfit.fileName}`
      );
      expect(img?.getAttribute('alt')).toBe(outfit.alt);
      const title = outfitBox.querySelector('h2');
      expect(title?.textContent?.trim()).toBe(outfit.name);
      const description = outfitBox.querySelector('p');
      expect(description?.textContent?.trim()).toBe(outfit.description);
    });
  }
});
