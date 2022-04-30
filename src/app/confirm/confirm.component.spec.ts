import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmComponent } from './confirm.component';

describe('ConfirmComponent', () => {
  let component: ConfirmComponent;
  let fixture: ComponentFixture<ConfirmComponent>;
  let compiled: any;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConfirmComponent],
    }).compileComponents();
    fixture = TestBed.createComponent(ConfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    compiled = fixture.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the view correctly', () => {
    const title = compiled.querySelector('h1');
    expect(title.textContent.trim()).toBe('Castle');
    const buttons = compiled.querySelectorAll('.nes-btn');
    expect(buttons.length).toBe(1);
    expect(buttons[0].tagName).toBe('A');
    expect(buttons[0].textContent.trim()).toBe('Explore the town');
    expect(buttons[0].getAttribute('routerLink')).toBe('/plaza');
  });
});
