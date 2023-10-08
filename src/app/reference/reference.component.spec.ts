import { ComponentFixture, TestBed } from '@angular/core/testing';
import { tattoos } from 'src/data/tattoos';

import { ReferenceComponent } from './reference.component';

describe('ReferenceComponent', () => {
  let component: ReferenceComponent;
  let fixture: ComponentFixture<ReferenceComponent>;
  let compiled: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReferenceComponent],
    }).compileComponents();
    fixture = TestBed.createComponent(ReferenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    compiled = fixture.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the main view correctly', () => {
    const title = compiled.querySelector('h1');
    expect(title?.textContent?.trim()).toBe('Reference Sheet');
    const buttons = compiled.querySelectorAll('.nes-btn');
    expect(buttons.length).toBe(8);
    expect(buttons[0].tagName).toBe('BUTTON');
    expect(buttons[0].textContent?.trim()).toBe('Body');
    expect(buttons[1].tagName).toBe('BUTTON');
    expect(buttons[1].textContent?.trim()).toBe('Face');
    expect(buttons[2].tagName).toBe('BUTTON');
    expect(buttons[2].textContent?.trim()).toBe('Hands');
    expect(buttons[3].tagName).toBe('BUTTON');
    expect(buttons[3].textContent?.trim()).toBe('Feet');
    expect(buttons[4].tagName).toBe('BUTTON');
    expect(buttons[4].textContent?.trim()).toBe('Tattoos');
    expect(buttons[5].tagName).toBe('A');
    expect(buttons[5].textContent?.trim()).toBe('See Art');
    expect(buttons[5].getAttribute('routerLink')).toBe('/museum');
    expect(buttons[6].tagName).toBe('A');
    expect(buttons[6].textContent?.trim()).toBe('See Outfits');
    expect(buttons[6].getAttribute('routerLink')).toBe('/tailor');
    expect(buttons[7].tagName).toBe('A');
    expect(buttons[7].textContent?.trim()).toBe('See Games');
    expect(buttons[7].getAttribute('routerLink')).toBe('/training-hall');
  });

  it('should render the body view correctly', () => {
    component.changeView('body');
    fixture.detectChanges();
    const imgs = compiled.querySelectorAll('img');
    expect(imgs.length).toBe(3);
    expect(imgs[1].getAttribute('src')).toBe(
      'https://cdn.naomi.lgbt/naomi/ref/front.png'
    );
    expect(imgs[2].getAttribute('src')).toBe(
      'https://cdn.naomi.lgbt/naomi/ref/back.png'
    );
  });

  it('should render the face view correctly', () => {
    component.changeView('face');
    fixture.detectChanges();
    const imgs = compiled.querySelectorAll('img');
    expect(imgs.length).toBe(2);
    expect(imgs[1].getAttribute('src')).toBe(
      'https://cdn.naomi.lgbt/naomi/ref/face.png'
    );
    const h2 = compiled.querySelector('h2');
    expect(h2?.textContent?.trim()).toBe('Face');
  });

  it('should render the hands view correctly', () => {
    component.changeView('hands');
    fixture.detectChanges();
    const imgs = compiled.querySelectorAll('img');
    expect(imgs.length).toBe(2);
    expect(imgs[1].getAttribute('src')).toBe(
      'https://cdn.naomi.lgbt/naomi/ref/hands.png'
    );
    const h2 = compiled.querySelector('h2');
    expect(h2?.textContent?.trim()).toBe('Hands');
  });

  it('should render the feet view correctly', () => {
    component.changeView('feet');
    fixture.detectChanges();
    const imgs = compiled.querySelectorAll('img');
    expect(imgs.length).toBe(2);
    expect(imgs[1].getAttribute('src')).toBe(
      'https://cdn.naomi.lgbt/naomi/ref/feet.png'
    );
    const h2 = compiled.querySelector('h2');
    expect(h2?.textContent?.trim()).toBe('Feet');
  });

  for (const tattoo of tattoos) {
    it(`should render the ${tattoo.name} tattoo correctly`, () => {
      component.changeView('tattoos');
      component.selectTattoo(String(tattoos.indexOf(tattoo)));
      fixture.detectChanges();
      const container = compiled.querySelector('.tattoo');
      const img = container?.querySelector('img');
      expect(img?.getAttribute('src')).toBe(
        `https://cdn.naomi.lgbt/naomi/ref/tattoos/${tattoo.fileName}`
      );
      const h2 = container?.querySelector('h2');
      expect(h2?.textContent?.trim()).toBe(tattoo.name);
    });
  }
});
