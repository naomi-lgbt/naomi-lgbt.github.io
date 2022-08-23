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

  it('should render the outfits correctly', () => {
    const outfits = compiled.querySelectorAll('.outfit');
    expect(outfits.length).toBe(Outfits.length);
    outfits.forEach((outfit, index) => {
      const name = outfit.querySelector('h2');
      expect(name?.textContent?.trim()).toBe(Outfits[index].name);
      const description = outfit.querySelector('p');
      expect(description?.textContent?.trim()).toBe(Outfits[index].description);
      const image = outfit.querySelector('.outfit-img');
      expect(image?.getAttribute('src')).toContain(Outfits[index].fileName);
    });
  });
});
