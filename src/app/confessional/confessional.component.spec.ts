import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfessionalComponent } from './confessional.component';

describe('ConfessionalComponent', () => {
  let component: ConfessionalComponent;
  let fixture: ComponentFixture<ConfessionalComponent>;
  let compiled: any;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConfessionalComponent],
    }).compileComponents();
    fixture = TestBed.createComponent(ConfessionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    compiled = fixture.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the view correctly', () => {
    const title = compiled.querySelector('h1');
    expect(title.textContent.trim()).toBe('Confessional');
    const buttons = compiled.querySelectorAll('.nes-btn');
    expect(buttons.length).toBe(2);
    expect(buttons[0].tagName).toBe('A');
    expect(buttons[0].textContent.trim()).toBe('Enter the Confessional');
    expect(buttons[0].getAttribute('href')).toBe('https://anon.naomi.lgbt');
    expect(buttons[1].tagName).toBe('A');
    expect(buttons[1].textContent.trim()).toBe('Return to the Plaza');
    expect(buttons[1].getAttribute('routerLink')).toBe('/plaza');
  });
});
