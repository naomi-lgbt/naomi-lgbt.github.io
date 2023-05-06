// import { ComponentFixture, TestBed } from '@angular/core/testing';

// import { MuseumComponent } from './museum.component';
// import { HttpClientModule } from '@angular/common/http';
// import { AssetsService } from '../assets.service';

// describe('MuseumComponent', () => {
//   let component: MuseumComponent;
//   let fixture: ComponentFixture<MuseumComponent>;
//   let compiled: HTMLElement;

//   beforeEach(async () => {
//     await TestBed.configureTestingModule({
//       declarations: [MuseumComponent],
//       imports: [HttpClientModule],
//       providers: [AssetsService],
//     }).compileComponents();
//     fixture = TestBed.createComponent(MuseumComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//     compiled = fixture.nativeElement;
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });

//   it('should render the intro view', () => {
//     expect(component.view).toBe('intro');
//     const title = compiled.querySelector('h1');
//     expect(title?.textContent?.trim()).toBe('Museum');
//     const buttons = compiled.querySelectorAll('.nes-btn');
//     expect(buttons.length).toBe(4);
//     expect(buttons[0].tagName).toBe('BUTTON');
//     expect(buttons[0].textContent?.trim()).toBe('Portrait Exhibit');
//     expect(buttons[1].tagName).toBe('BUTTON');
//     expect(buttons[1].textContent?.trim()).toBe('Emotion Exhibit');
//     expect(buttons[2].tagName).toBe('BUTTON');
//     expect(buttons[2].textContent?.trim()).toBe('Mural Exhibit');
//     expect(buttons[3].tagName).toBe('A');
//     expect(buttons[3].textContent?.trim()).toBe('Enough art for now');
//     expect(buttons[3].getAttribute('routerLink')).toBe('/plaza');
//   });

//   it('should render the portrait view', () => {
//     component.changeView('portrait');
//     fixture.detectChanges();
//     compiled = fixture.nativeElement;
//     expect(component.view).toBe('portrait');
//     const title = compiled.querySelector('h1');
//     expect(title?.textContent?.trim()).toBe('Museum');
//     const buttons = compiled.querySelectorAll('.nes-btn');
//     expect(buttons.length).toBe(5);
//     expect(buttons[0].tagName).toBe('BUTTON');
//     expect(buttons[0].textContent?.trim()).toBe('Previous Portrait');
//     expect(buttons[1].tagName).toBe('BUTTON');
//     expect(buttons[1].textContent?.trim()).toBe('Next Portrait');
//     expect(buttons[2].tagName).toBe('BUTTON');
//     expect(buttons[2].textContent?.trim()).toBe('Emotion Exhibit');
//     expect(buttons[3].tagName).toBe('BUTTON');
//     expect(buttons[3].textContent?.trim()).toBe('Mural Exhibit');
//     expect(buttons[4].tagName).toBe('A');
//     expect(buttons[4].textContent?.trim()).toBe('Enough art for now');
//     expect(buttons[4].getAttribute('routerLink')).toBe('/plaza');
//   });

//   it(`should render the portraits correctly`, () => {
//     for (const portrait of component.portraits) {
//       component.changeView('portrait');
//       component.selectPortrait(String(component.portraits.indexOf(portrait)));
//       fixture.detectChanges();
//       compiled = fixture.nativeElement;
//       expect(component.view).toBe('portrait');
//       const portraitBox = compiled.querySelector('.image');
//       const links = portraitBox?.querySelectorAll('a');
//       const imageLink = links?.[0];
//       expect(imageLink?.getAttribute('href')).toBe(
//         `https://cdn.naomi.lgbt/naomi/art/${portrait.fileName}`
//       );
//       expect(imageLink?.getAttribute('target')).toBe('_blank');
//       const artistLink = links?.[1];
//       expect(artistLink?.getAttribute('href')).toBe(portrait.url);
//       expect(artistLink?.getAttribute('target')).toBe('_blank');
//       const img = portraitBox?.querySelector('img');
//       expect(img?.getAttribute('src')).toBe(
//         `https://cdn.naomi.lgbt/naomi/art/${portrait.fileName}`
//       );
//       expect(img?.getAttribute('alt')).toBe(portrait.alt);
//       const title = portraitBox?.querySelector('p');
//       expect(title?.textContent?.trim()).toBe(`By ${portrait.artist}`);
//     }
//   });

//   it('should render the emote view', () => {
//     component.changeView('emote');
//     fixture.detectChanges();
//     compiled = fixture.nativeElement;
//     expect(component.view).toBe('emote');
//     const title = compiled.querySelector('h1');
//     expect(title?.textContent?.trim()).toBe('Museum');
//     const buttons = compiled.querySelectorAll('.nes-btn');
//     expect(buttons.length).toBe(5);
//     expect(buttons[0].tagName).toBe('BUTTON');
//     expect(buttons[0].textContent?.trim()).toBe('Previous Emote');
//     expect(buttons[1].tagName).toBe('BUTTON');
//     expect(buttons[1].textContent?.trim()).toBe('Next Emote');
//     expect(buttons[2].tagName).toBe('BUTTON');
//     expect(buttons[2].textContent?.trim()).toBe('Portrait Exhibit');
//     expect(buttons[3].tagName).toBe('BUTTON');
//     expect(buttons[3].textContent?.trim()).toBe('Mural Exhibit');
//     expect(buttons[4].tagName).toBe('A');
//     expect(buttons[4].textContent?.trim()).toBe('Enough art for now');
//     expect(buttons[4].getAttribute('routerLink')).toBe('/plaza');
//   });

//   it(`should render the emotes correctly`, () => {
//     for (const emote of component.emotes) {
//       component.changeView('emote');
//       component.selectEmote(String(component.emotes.indexOf(emote)));
//       fixture.detectChanges();
//       compiled = fixture.nativeElement;
//       expect(component.view).toBe('emote');
//       const emoteBox = compiled.querySelector('.image');
//       const imageLink = emoteBox?.querySelector('a');
//       expect(imageLink?.getAttribute('href')).toBe(
//         `https://cdn.naomi.lgbt/naomi/emotes/${emote.fileName}`
//       );
//       expect(imageLink?.getAttribute('target')).toBe('_blank');
//       const img = emoteBox?.querySelector('img');
//       expect(img?.getAttribute('src')).toBe(
//         `https://cdn.naomi.lgbt/naomi/emotes/${emote.fileName}`
//       );
//       expect(img?.getAttribute('alt')).toBe('Naomi');
//       const title = emoteBox?.querySelector('p');
//       expect(title?.textContent?.trim()).toBe(emote.name);
//     }
//   });

//   it('should render the murals view', () => {
//     component.changeView('pose');
//     fixture.detectChanges();
//     compiled = fixture.nativeElement;
//     expect(component.view).toBe('pose');
//     const title = compiled.querySelector('h1');
//     expect(title?.textContent?.trim()).toBe('Museum');
//     const buttons = compiled.querySelectorAll('.nes-btn');
//     expect(buttons.length).toBe(5);
//     expect(buttons[0].tagName).toBe('BUTTON');
//     expect(buttons[0].textContent?.trim()).toBe('Previous Mural');
//     expect(buttons[1].tagName).toBe('BUTTON');
//     expect(buttons[1].textContent?.trim()).toBe('Next Mural');
//     expect(buttons[2].tagName).toBe('BUTTON');
//     expect(buttons[2].textContent?.trim()).toBe('Portrait Exhibit');
//     expect(buttons[3].tagName).toBe('BUTTON');
//     expect(buttons[3].textContent?.trim()).toBe('Emotion Exhibit');
//     expect(buttons[4].tagName).toBe('A');
//     expect(buttons[4].textContent?.trim()).toBe('Enough art for now');
//     expect(buttons[4].getAttribute('routerLink')).toBe('/plaza');
//   });

//   it(`should render the poses correctly`, () => {
//     for (const pose of component.poses) {
//       component.changeView('pose');
//       component.selectPose(String(component.poses.indexOf(pose)));
//       fixture.detectChanges();
//       compiled = fixture.nativeElement;
//       expect(component.view).toBe('pose');
//       const emoteBox = compiled.querySelector('.image');
//       const imageLink = emoteBox?.querySelector('a');
//       expect(imageLink?.getAttribute('href')).toBe(
//         `https://cdn.naomi.lgbt/naomi/koikatsu/${pose}`
//       );
//       expect(imageLink?.getAttribute('target')).toBe('_blank');
//       const img = emoteBox?.querySelector('img');
//       expect(img?.getAttribute('src')).toBe(
//         `https://cdn.naomi.lgbt/naomi/koikatsu/${pose}`
//       );
//       expect(img?.getAttribute('alt')).toBe('Naomi');
//       const title = emoteBox?.querySelector('p');
//       expect(title?.textContent?.trim()).toBe(
//         component.getPoseName(component.poses.indexOf(pose))
//       );
//     }
//   });
// });
