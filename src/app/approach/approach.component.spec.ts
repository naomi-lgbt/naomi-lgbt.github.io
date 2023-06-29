import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApproachComponent } from './approach.component';

describe('ApproachComponent', () => {
  let component: ApproachComponent;
  let fixture: ComponentFixture<ApproachComponent>;
  let compiled: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ApproachComponent],
    }).compileComponents();
    fixture = TestBed.createComponent(ApproachComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    compiled = fixture.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the view correctly', () => {
    const title = compiled.querySelector('h1');
    expect(title?.textContent?.trim()).toBe('Welcome');
    const buttons = compiled.querySelectorAll('.nes-btn');
    expect(buttons.length).toBe(1);
    expect(buttons[0].tagName).toBe('A');
    expect(buttons[0].textContent?.trim()).toBe(
      'Follow the map - and the noise'
    );
    expect(buttons[0].getAttribute('routerLink')).toBe('/plaza');
  });
});
