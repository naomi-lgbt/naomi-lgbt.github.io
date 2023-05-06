// import { ComponentFixture, TestBed } from '@angular/core/testing';

// import { TrainingHallComponent } from './training-hall.component';
// import { HttpClientModule } from '@angular/common/http';
// import { AssetsService } from '../assets.service';

// describe('TrainingHallComponent', () => {
//   let component: TrainingHallComponent;
//   let fixture: ComponentFixture<TrainingHallComponent>;
//   let compiled: HTMLElement;

//   beforeEach(async () => {
//     await TestBed.configureTestingModule({
//       declarations: [TrainingHallComponent],
//       imports: [HttpClientModule],
//       providers: [AssetsService],
//     }).compileComponents();
//     fixture = TestBed.createComponent(TrainingHallComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//     compiled = fixture.nativeElement;
//   });

//   it('should create', async () => {
//     expect(component).toBeTruthy();
//   });

//   it('should render the intro view', async () => {
//     expect(component.view).toBe('intro');
//     const title = compiled.querySelector('h1');
//     expect(title?.textContent?.trim()).toBe('Training Hall');
//     const buttons = compiled.querySelectorAll('.nes-btn');
//     expect(buttons.length).toBe(3);
//     expect(buttons[0].tagName).toBe('BUTTON');
//     expect(buttons[0].textContent?.trim()).toBe('Follow the instructor');
//     expect(buttons[1].tagName).toBe('A');
//     expect(buttons[1].textContent?.trim()).toBe(
//       "See Naomi's planned adventures"
//     );
//     expect(buttons[1].getAttribute('href')).toBe('https://games.naomi.lgbt');
//     expect(buttons[2].tagName).toBe('A');
//     expect(buttons[2].textContent?.trim()).toBe(
//       'This is too hard - Back outside!'
//     );
//     expect(buttons[2].getAttribute('routerLink')).toBe('/plaza');
//   });

//   it('should render the games view', async () => {
//     component.changeView('games');
//     fixture.detectChanges();
//     compiled = fixture.nativeElement;
//     expect(component.view).toBe('games');
//     const title = compiled.querySelector('h1');
//     expect(title?.textContent?.trim()).toBe('Training Hall');
//     const buttons = compiled.querySelectorAll('.nes-btn');
//     expect(buttons.length).toBe(4);
//     expect(buttons[0].tagName).toBe('BUTTON');
//     expect(buttons[0].textContent?.trim()).toBe('Previous Adventure');
//     expect(buttons[1].tagName).toBe('BUTTON');
//     expect(buttons[1].textContent?.trim()).toBe('Next Adventure');
//     expect(buttons[2].tagName).toBe('A');
//     expect(buttons[2].textContent?.trim()).toBe(
//       "See Naomi's planned adventures"
//     );
//     expect(buttons[2].getAttribute('href')).toBe('https://games.naomi.lgbt');
//     expect(buttons[3].tagName).toBe('A');
//     expect(buttons[3].textContent?.trim()).toBe("That's enough for today");
//     expect(buttons[3].getAttribute('routerLink')).toBe('/plaza');
//   });

//   it(`should render the adventures correctly`, async () => {
//     for (const adventure of component.games) {
//       component.changeView('games');
//       component.selectGame(String(component.games.indexOf(adventure)));
//       fixture.detectChanges();
//       compiled = fixture.nativeElement;
//       expect(component.view).toBe('games');
//       const game = compiled.querySelector('.game');
//       const imgLink = game?.querySelector('a');
//       expect(imgLink?.getAttribute('href')).toBe(
//         `https://cdn.naomi.lgbt/naomi/games/${adventure.fileName}`
//       );
//       expect(imgLink?.getAttribute('target')).toBe('_blank');
//       const img = game?.querySelector('img');
//       expect(img?.getAttribute('src')).toBe(
//         `https://cdn.naomi.lgbt/naomi/games/${adventure.fileName}`
//       );
//       expect(img?.getAttribute('alt')).toBe(adventure.game);
//       const title = game?.querySelector('p');
//       expect(title?.textContent?.trim()).toBe(adventure.game);
//     }
//   });
// });
