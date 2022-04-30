import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibraryComponent } from './library.component';

describe('LibraryComponent', () => {
  let component: LibraryComponent;
  let fixture: ComponentFixture<LibraryComponent>;
  let compiled: any;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LibraryComponent],
    }).compileComponents();
    fixture = TestBed.createComponent(LibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    compiled = fixture.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the intro view', () => {
    expect(component.openBook).toBeNull();
    const title = compiled.querySelector('h1');
    expect(title.textContent.trim()).toBe('Library');
    const buttons = compiled.querySelectorAll('.nes-btn');
    expect(buttons.length).toBe(4);
    expect(buttons[0].tagName).toBe('BUTTON');
    expect(buttons[0].textContent.trim()).toBe('Who is Naomi?');
    expect(buttons[1].tagName).toBe('BUTTON');
    expect(buttons[1].textContent.trim()).toBe('Before The Journey');
    expect(buttons[2].tagName).toBe('BUTTON');
    expect(buttons[2].textContent.trim()).toBe('The Life of a Developer');
    expect(buttons[3].tagName).toBe('A');
    expect(buttons[3].textContent.trim()).toBe('Thank her, and leave');
    expect(buttons[3].getAttribute('routerLink')).toBe('/plaza');
  });

  it('should render a book', () => {
    component.loadBook('naomi');
    fixture.detectChanges();
    compiled = fixture.nativeElement;
    expect(component.openBook?.key).toBe('naomi');
    const title = compiled.querySelector('h1');
    expect(title.textContent.trim()).toBe(component.openBook?.title);
    const contents = compiled.querySelector('.is-dark');
    const lines = contents.querySelectorAll('p');
    expect(lines.length).toBe(component.openBook?.text.length);
    const buttons = compiled.querySelectorAll('.nes-btn');
    expect(buttons.length).toBe(3);
    expect(buttons[0].tagName).toBe('BUTTON');
    expect(buttons[0].textContent.trim()).toBe('Before The Journey');
    expect(buttons[1].tagName).toBe('BUTTON');
    expect(buttons[1].textContent.trim()).toBe('The Life of a Developer');
    expect(buttons[2].tagName).toBe('A');
    expect(buttons[2].textContent.trim()).toBe('Thank her, and leave');
    expect(buttons[2].getAttribute('routerLink')).toBe('/plaza');
  });
});
