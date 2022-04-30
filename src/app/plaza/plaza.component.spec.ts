import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlazaComponent } from './plaza.component';

describe('PlazaComponent', () => {
  let component: PlazaComponent;
  let fixture: ComponentFixture<PlazaComponent>;
  let compiled: any;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PlazaComponent],
    }).compileComponents();
    fixture = TestBed.createComponent(PlazaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    compiled = fixture.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the view correctly', () => {
    const title = compiled.querySelector('h1');
    expect(title.textContent.trim()).toBe('Town Plaza');
    const buttons = compiled.querySelectorAll('.nes-btn');
    expect(buttons.length).toBe(7);
    expect(buttons[0].tagName).toBe('A');
    expect(buttons[0].textContent.trim()).toBe('Library');
    expect(buttons[0].getAttribute('routerLink')).toBe('/library');
    expect(buttons[1].tagName).toBe('A');
    expect(buttons[1].textContent.trim()).toBe('Arena');
    expect(buttons[1].getAttribute('routerLink')).toBe('/arena');
    expect(buttons[2].tagName).toBe('A');
    expect(buttons[2].textContent.trim()).toBe('Tavern');
    expect(buttons[2].getAttribute('routerLink')).toBe('/tavern');
    expect(buttons[3].tagName).toBe('A');
    expect(buttons[3].textContent.trim()).toBe('Museum');
    expect(buttons[3].getAttribute('routerLink')).toBe('/museum');
    expect(buttons[4].tagName).toBe('A');
    expect(buttons[4].textContent.trim()).toBe('Training Hall');
    expect(buttons[4].getAttribute('routerLink')).toBe('/training-hall');
    expect(buttons[5].tagName).toBe('A');
    expect(buttons[5].textContent.trim()).toBe('Temple');
    expect(buttons[5].getAttribute('routerLink')).toBe('/temple');
    expect(buttons[6].tagName).toBe('A');
    expect(buttons[6].textContent.trim()).toBe('Castle');
    expect(buttons[6].getAttribute('routerLink')).toBe('/castle');
  });
});
