import { ComponentFixture, TestBed } from '@angular/core/testing';
import { emotes } from 'src/assets/data/emotes';
import { portraits } from 'src/assets/data/portraits';

import { MuseumComponent } from './museum.component';

describe('MuseumComponent', () => {
  let component: MuseumComponent;
  let fixture: ComponentFixture<MuseumComponent>;
  let compiled: any;

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
    expect(title.textContent.trim()).toBe('Museum');
    const buttons = compiled.querySelectorAll('.nes-btn');
    expect(buttons.length).toBe(3);
    expect(buttons[0].tagName).toBe('BUTTON');
    expect(buttons[0].textContent.trim()).toBe('Portrait Exhibit');
    expect(buttons[1].tagName).toBe('BUTTON');
    expect(buttons[1].textContent.trim()).toBe('Emotion Exhibit');
    expect(buttons[2].tagName).toBe('A');
    expect(buttons[2].textContent.trim()).toBe('Enough art for now');
    expect(buttons[2].getAttribute('routerLink')).toBe('/plaza');
  });

  it('should render the portrait view', () => {
    component.changeView('portrait');
    fixture.detectChanges();
    compiled = fixture.nativeElement;
    expect(component.view).toBe('portrait');
    const title = compiled.querySelector('h1');
    expect(title.textContent.trim()).toBe('Museum');
    const art = compiled.querySelectorAll('.art');
    expect(art.length).toBe(portraits.length);
    const buttons = compiled.querySelectorAll('.nes-btn');
    expect(buttons.length).toBe(2);
    expect(buttons[0].tagName).toBe('BUTTON');
    expect(buttons[0].textContent.trim()).toBe('Emotion Exhibit');
    expect(buttons[1].tagName).toBe('A');
    expect(buttons[1].textContent.trim()).toBe('Enough art for now');
    expect(buttons[1].getAttribute('routerLink')).toBe('/plaza');
  });
  
  it('should render the emote view', () => {
    component.changeView('emote');
    fixture.detectChanges();
    compiled = fixture.nativeElement;
    expect(component.view).toBe('emote');
    const title = compiled.querySelector('h1');
    expect(title.textContent.trim()).toBe('Museum');
    const motes = compiled.querySelectorAll('.emote');
    expect(motes.length).toBe(emotes.length);
    const buttons = compiled.querySelectorAll('.nes-btn');
    expect(buttons.length).toBe(2);
    expect(buttons[0].tagName).toBe('BUTTON');
    expect(buttons[0].textContent.trim()).toBe('Portrait Exhibit');
    expect(buttons[1].tagName).toBe('A');
    expect(buttons[1].textContent.trim()).toBe('Enough art for now');
    expect(buttons[1].getAttribute('routerLink')).toBe('/plaza');
  });
});
