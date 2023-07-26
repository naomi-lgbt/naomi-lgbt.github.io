import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CouncilComponent } from './council.component';

describe('CouncilComponent', () => {
  let component: CouncilComponent;
  let fixture: ComponentFixture<CouncilComponent>;
  let compiled: HTMLElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CouncilComponent],
    });
    fixture = TestBed.createComponent(CouncilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    compiled = fixture.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the view correctly', () => {
    const title = compiled.querySelector('h1');
    expect(title?.textContent?.trim()).toBe('Council Chambers');
    const buttons = compiled.querySelectorAll('.nes-btn');
    expect(buttons.length).toBe(1);
    expect(buttons[0].tagName).toBe('A');
    expect(buttons[0].textContent?.trim()).toBe('Leave the Chambers');
    expect(buttons[0].getAttribute('routerLink')).toBe('/plaza');
  });
});
