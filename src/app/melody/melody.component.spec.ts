import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MelodyComponent } from './melody.component';
import { HttpClientModule } from '@angular/common/http';
import { AssetsService } from '../assets.service';

describe('MelodyComponent', () => {
  let component: MelodyComponent;
  let fixture: ComponentFixture<MelodyComponent>;
  let compiled: HTMLElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MelodyComponent],
      imports: [HttpClientModule],
      providers: [AssetsService],
    });
    fixture = TestBed.createComponent(MelodyComponent);
    component = fixture.componentInstance;
    component.poses = [
      {
        fileName: 'beach.png',
        name: 'Vacation',
        alt: 'Melody wearing her swimsuit, laying on a towel at the beach.',
        description:
          'When given the rare day off, Melody takes full advantage.',
      },
      {
        fileName: 'gun.png',
        name: 'Protector',
        alt: 'Melody holding an assault rifle, ready to fire.',
        description: "One of her many duties is to ensure Naomi's safety.",
      },
    ];
    fixture.detectChanges();
    compiled = fixture.nativeElement;
  });

  it('should render the view correctly', () => {
    const title = compiled.querySelector('h1');
    expect(title?.textContent?.trim()).toBe("Melody's Office");
    const buttons = compiled.querySelectorAll('.nes-btn');
    expect(buttons.length).toBe(4);
    expect(buttons[0].tagName).toBe('BUTTON');
    expect(buttons[0].textContent?.trim()).toBe('Previous Photo');
    expect(buttons[1].tagName).toBe('BUTTON');
    expect(buttons[1].textContent?.trim()).toBe('Random Photo');
    expect(buttons[2].tagName).toBe('BUTTON');
    expect(buttons[2].textContent?.trim()).toBe('Next Photo');
    expect(buttons[3].tagName).toBe('A');
    expect(buttons[3].textContent?.trim()).toBe('Leave the office');
    expect(buttons[3].getAttribute('routerLink')).toBe('/plaza');
  });

  it(`should render the poses correctly`, () => {
    for (const pose of component.poses) {
      component.selectPose(String(component.poses.indexOf(pose)));
      fixture.detectChanges();
      compiled = fixture.nativeElement;
      const poseBox = compiled.querySelector('.pose');
      const imageLink = poseBox?.querySelector('a');
      expect(imageLink?.getAttribute('href')).toBe(
        `https://cdn.naomi.lgbt/melody/koikatsu/${pose.fileName}`
      );
      expect(imageLink?.getAttribute('target')).toBe('_blank');
      const img = poseBox?.querySelector('img');
      expect(img?.getAttribute('src')).toBe(
        `https://cdn.naomi.lgbt/melody/koikatsu/${pose.fileName}`
      );
      expect(img?.getAttribute('alt')).toBe(pose.alt);
      const title = poseBox?.querySelector('h2');
      expect(title?.textContent?.trim()).toBe(pose.name);
      const description = poseBox?.querySelector('p');
      expect(description?.textContent?.trim()).toBe(pose.description);
    }
  });
});
