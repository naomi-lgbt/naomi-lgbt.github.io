import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { hallOfFame } from 'src/assets/data/hallOfFame';

import { ArenaComponent } from './arena.component';

describe('ArenaComponent', () => {
  let component: ArenaComponent;
  let fixture: ComponentFixture<ArenaComponent>;
  let compiled: any;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ArenaComponent],
      imports: [HttpClientModule],
    }).compileComponents();
    fixture = TestBed.createComponent(ArenaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    compiled = fixture.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load the intro view correctly', () => {
    expect(component.view).toBe('intro');
    const title = compiled.querySelector('h1');
    expect(title.textContent.trim()).toBe('Arena');
    const buttons = compiled.querySelectorAll('.nes-btn');
    expect(buttons.length).toBe(4);
    expect(buttons[0].tagName).toBe('BUTTON');
    expect(buttons[0].textContent.trim()).toBe('See the Hall of Fame');
    expect(buttons[1].tagName).toBe('BUTTON');
    expect(buttons[1].textContent.trim()).toBe('Watch Naomi fight');
    expect(buttons[2].tagName).toBe('BUTTON');
    expect(buttons[2].textContent.trim()).toBe('Inquire about fighting');
    expect(buttons[3].tagName).toBe('A');
    expect(buttons[3].textContent.trim()).toBe('Change your mind and leave');
    expect(buttons[3].getAttribute('routerLink')).toBe('/plaza');
  });

  it('should load the hof view correctly', () => {
    component.changeView('hof');
    fixture.detectChanges();
    compiled = fixture.nativeElement;
    expect(component.view).toBe('hof');
    const title = compiled.querySelector('h1');
    expect(title.textContent.trim()).toBe('Arena');
    const projects = compiled.querySelectorAll('.fight');
    expect(projects.length).toBe(hallOfFame.length);
    const buttons = compiled.querySelectorAll('.nes-btn:not(.fight-btn)');
    expect(buttons.length).toBe(3);
    expect(buttons[0].tagName).toBe('BUTTON');
    expect(buttons[0].textContent.trim()).toBe('Watch Naomi fight');
    expect(buttons[1].tagName).toBe('BUTTON');
    expect(buttons[1].textContent.trim()).toBe('Inquire about fighting');
    expect(buttons[2].tagName).toBe('A');
    expect(buttons[2].textContent.trim()).toBe('Change your mind and leave');
    expect(buttons[2].getAttribute('routerLink')).toBe('/plaza');
  });

  it('should load the watch view correctly', () => {
    component.changeView('watch');
    fixture.detectChanges();
    compiled = fixture.nativeElement;
    expect(component.view).toBe('watch');
    const title = compiled.querySelector('h1');
    expect(title.textContent.trim()).toBe('Arena');
    const buttons = compiled.querySelectorAll('.nes-btn');
    expect(buttons.length).toBe(4);
    expect(buttons[0].tagName).toBe('BUTTON');
    expect(buttons[0].textContent.trim()).toBe('Reload History');
    expect(buttons[1].tagName).toBe('BUTTON');
    expect(buttons[1].textContent.trim()).toBe('See the Hall of Fame');
    expect(buttons[2].tagName).toBe('BUTTON');
    expect(buttons[2].textContent.trim()).toBe('Inquire about fighting');
    expect(buttons[3].tagName).toBe('A');
    expect(buttons[3].textContent.trim()).toBe('Change your mind and leave');
    expect(buttons[3].getAttribute('routerLink')).toBe('/plaza');
  });

  it('should load the fight view correctly', () => {
    component.changeView('fight');
    fixture.detectChanges();
    compiled = fixture.nativeElement;
    expect(component.view).toBe('fight');
    const title = compiled.querySelector('h1');
    expect(title.textContent.trim()).toBe('Arena');
    const buttons = compiled.querySelectorAll('.nes-btn');
    expect(buttons.length).toBe(4);
    expect(buttons[0].tagName).toBe('A');
    expect(buttons[0].textContent.trim()).toBe('Read the Scroll');
    expect(buttons[0].getAttribute('href')).toBe(
      'https://contribute.nhcarrigan.com'
    );
    expect(buttons[1].tagName).toBe('BUTTON');
    expect(buttons[1].textContent.trim()).toBe('See the Hall of Fame');
    expect(buttons[2].tagName).toBe('BUTTON');
    expect(buttons[2].textContent.trim()).toBe('Watch Naomi fight');
    expect(buttons[3].tagName).toBe('A');
    expect(buttons[3].textContent.trim()).toBe('Change your mind and leave');
    expect(buttons[3].getAttribute('routerLink')).toBe('/plaza');
  });
});
