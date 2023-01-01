import { ComponentFixture, TestBed } from '@angular/core/testing';
import { adventures } from 'src/assets/data/adventures';
import { gamesFiles } from 'src/assets/fileList';

import { TrainingHallComponent } from './training-hall.component';

describe('TrainingHallComponent', () => {
  let component: TrainingHallComponent;
  let fixture: ComponentFixture<TrainingHallComponent>;
  let compiled: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TrainingHallComponent],
    }).compileComponents();
    fixture = TestBed.createComponent(TrainingHallComponent);
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
    expect(title?.textContent?.trim()).toBe('Training Hall');
    const buttons = compiled.querySelectorAll('.nes-btn');
    expect(buttons.length).toBe(2);
    expect(buttons[0].tagName).toBe('BUTTON');
    expect(buttons[0].textContent?.trim()).toBe('Follow the instructor');
    expect(buttons[1].tagName).toBe('A');
    expect(buttons[1].textContent?.trim()).toBe(
      'This is too hard - Back outside!'
    );
    expect(buttons[1].getAttribute('routerLink')).toBe('/plaza');
  });

  it('should render the games view', () => {
    component.changeView('games');
    fixture.detectChanges();
    compiled = fixture.nativeElement;
    expect(component.view).toBe('games');
    const title = compiled.querySelector('h1');
    expect(title?.textContent?.trim()).toBe('Training Hall');
    const games = compiled.querySelectorAll('.game');
    const buttons = compiled.querySelectorAll('.nes-btn');
    expect(buttons.length).toBe(3);
    expect(buttons[0].tagName).toBe('BUTTON');
    expect(buttons[0].textContent?.trim()).toBe('Previous Adventure');
    expect(buttons[1].tagName).toBe('BUTTON');
    expect(buttons[1].textContent?.trim()).toBe('Next Adventure');
    expect(buttons[2].tagName).toBe('A');
    expect(buttons[2].textContent?.trim()).toBe("That's enough for today");
    expect(buttons[2].getAttribute('routerLink')).toBe('/plaza');
  });

  for (const adventure of adventures) {
    it(`should render the ${adventure.fileName} adventure`, () => {
      component.changeView('games');
      component.selectGame(String(adventures.indexOf(adventure)));
      fixture.detectChanges();
      compiled = fixture.nativeElement;
      expect(component.view).toBe('games');
      const game = compiled.querySelector('.game');
      const imgLink = game?.querySelector('a');
      expect(imgLink?.getAttribute('href')).toBe(
        `/assets/img/games/${adventure.fileName}`
      );
      expect(imgLink?.getAttribute('target')).toBe('_blank');
      const img = game?.querySelector('img');
      expect(img?.getAttribute('src')).toBe(
        `/assets/img/games/${adventure.fileName}`
      );
      expect(img?.getAttribute('alt')).toBe(adventure.game);
      const title = game?.querySelector('p');
      expect(title?.textContent?.trim()).toBe(adventure.game);
    });
  }

  for (const file of gamesFiles) {
    it(`should display the ${file} adventure`, () => {
      const adventure = adventures.find((el) => el.fileName === file);
      expect(adventure).toBeDefined();
    });
  }
});
