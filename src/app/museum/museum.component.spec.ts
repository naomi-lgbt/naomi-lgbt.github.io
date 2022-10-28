import { ComponentFixture, TestBed } from '@angular/core/testing';
import { emotes } from 'src/assets/data/emotes';
import { portraits } from 'src/assets/data/portraits';
import { artFiles, emotesFiles } from 'src/assets/fileList';

import { MuseumComponent } from './museum.component';

describe('MuseumComponent', () => {
  let component: MuseumComponent;
  let fixture: ComponentFixture<MuseumComponent>;
  let compiled: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MuseumComponent],
    }).compileComponents();
    fixture = TestBed.createComponent(MuseumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    compiled = fixture.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the intro view', () => {
    expect(component.view).toBe('intro');
    const title = compiled.querySelector('h1');
    expect(title?.textContent?.trim()).toBe('Museum');
    const buttons = compiled.querySelectorAll('.nes-btn');
    expect(buttons.length).toBe(3);
    expect(buttons[0].tagName).toBe('BUTTON');
    expect(buttons[0].textContent?.trim()).toBe('Portrait Exhibit');
    expect(buttons[1].tagName).toBe('BUTTON');
    expect(buttons[1].textContent?.trim()).toBe('Emotion Exhibit');
    expect(buttons[2].tagName).toBe('A');
    expect(buttons[2].textContent?.trim()).toBe('Enough art for now');
    expect(buttons[2].getAttribute('routerLink')).toBe('/plaza');
  });

  it('should render the portrait view', () => {
    component.changeView('portrait');
    fixture.detectChanges();
    compiled = fixture.nativeElement;
    expect(component.view).toBe('portrait');
    const title = compiled.querySelector('h1');
    expect(title?.textContent?.trim()).toBe('Museum');
    const art = compiled.querySelectorAll('.art');
    expect(art.length).toBe(portraits.length);
    const buttons = compiled.querySelectorAll('.nes-btn');
    expect(buttons.length).toBe(2);
    expect(buttons[0].tagName).toBe('BUTTON');
    expect(buttons[0].textContent?.trim()).toBe('Emotion Exhibit');
    expect(buttons[1].tagName).toBe('A');
    expect(buttons[1].textContent?.trim()).toBe('Enough art for now');
    expect(buttons[1].getAttribute('routerLink')).toBe('/plaza');
  });

  for (const portrait of portraits) {
    it(`should render the ${portrait.fileName} art`, () => {
      component.changeView('portrait');
      fixture.detectChanges();
      compiled = fixture.nativeElement;
      expect(component.view).toBe('portrait');
      const portraitBox =
        compiled.querySelectorAll('.art')?.[portraits.indexOf(portrait)];
      const links = portraitBox.querySelectorAll('a');
      const imageLink = links[0];
      expect(imageLink.getAttribute('href')).toBe(
        `/assets/img/art/${portrait.fileName}`
      );
      expect(imageLink.getAttribute('target')).toBe('_blank');
      const artistLink = links[1];
      expect(artistLink.getAttribute('href')).toBe(portrait.url);
      expect(artistLink.getAttribute('target')).toBe('_blank');
      const img = portraitBox.querySelector('img');
      expect(img?.getAttribute('src')).toBe(
        `/assets/img/art/${portrait.fileName}`
      );
      expect(img?.getAttribute('alt')).toBe(portrait.alt);
      const title = portraitBox.querySelector('.art-title');
      expect(title?.textContent?.trim()).toBe(`By ${portrait.artist}`);
    });
  }

  for (const file of artFiles) {
    it(`should display the ${file} portrait`, () => {
      const portrait = portraits.find((p) => p.fileName === file);
      expect(portrait).toBeDefined();
    });
  }

  it('should render the emote view', () => {
    component.changeView('emote');
    fixture.detectChanges();
    compiled = fixture.nativeElement;
    expect(component.view).toBe('emote');
    const title = compiled.querySelector('h1');
    expect(title?.textContent?.trim()).toBe('Museum');
    const motes = compiled.querySelectorAll('.emote');
    expect(motes.length).toBe(emotes.length);
    const buttons = compiled.querySelectorAll('.nes-btn');
    expect(buttons.length).toBe(2);
    expect(buttons[0].tagName).toBe('BUTTON');
    expect(buttons[0].textContent?.trim()).toBe('Portrait Exhibit');
    expect(buttons[1].tagName).toBe('A');
    expect(buttons[1].textContent?.trim()).toBe('Enough art for now');
    expect(buttons[1].getAttribute('routerLink')).toBe('/plaza');
  });

  for (const emote of emotes) {
    it(`should render the ${emote.fileName} emote`, () => {
      component.changeView('emote');
      fixture.detectChanges();
      compiled = fixture.nativeElement;
      expect(component.view).toBe('emote');
      const emoteBox =
        compiled.querySelectorAll('.emote')?.[emotes.indexOf(emote)];
      const imageLink = emoteBox.querySelector('a');
      expect(imageLink?.getAttribute('href')).toBe(
        `/assets/img/emotes/${emote.fileName}`
      );
      expect(imageLink?.getAttribute('target')).toBe('_blank');
      const img = emoteBox.querySelector('img');
      expect(img?.getAttribute('src')).toBe(
        `/assets/img/emotes/${emote.fileName}`
      );
      expect(img?.getAttribute('alt')).toBe('Naomi');
      const title = emoteBox.querySelector('.emote-title');
      expect(title?.textContent?.trim()).toBe(emote.name);
    });
  }

  for (const file of emotesFiles) {
    it(`should display the ${file} portrait`, () => {
      const emote = emotes.find((e) => e.fileName === file);
      expect(emote).toBeDefined();
    });
  }
});
