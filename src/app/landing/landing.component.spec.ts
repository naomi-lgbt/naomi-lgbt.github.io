import { ComponentFixture, TestBed } from "@angular/core/testing";

import { LandingComponent } from "./landing.component";

describe("LandingComponent", () => {
  let component: LandingComponent;
  let fixture: ComponentFixture<LandingComponent>;
  let compiled: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LandingComponent]
    }).compileComponents();
    fixture = TestBed.createComponent(LandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    compiled = fixture.nativeElement;
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should render the view correctly", () => {
    const title = compiled.querySelector("h1");
    expect(title?.textContent?.trim()).toBe("Naomi Carrigan");
    const buttons = compiled.querySelectorAll(".nes-btn");
    expect(buttons.length).toBe(2);
    expect(buttons[0].tagName).toBe("A");
    expect(buttons[0].textContent?.trim()).toBe("See Naomi's work");
    expect(buttons[0].getAttribute("href")).toBe("https://www.nhcarrigan.com");
    expect(buttons[1].tagName).toBe("A");
    expect(buttons[1].textContent?.trim()).toBe("Learn more about her");
    expect(buttons[1].getAttribute("routerLink")).toBe("/plaza");
  });

  it("should render all the dialogues", () => {
    const dialogues = compiled.querySelectorAll(".dialogue");
    expect(dialogues.length).toBe(2);
    expect(dialogues[0]?.textContent?.trim()).toBe(
      "Ah yes, we were expecting a visitor today."
    );
    expect(dialogues[0]?.querySelector("img")?.getAttribute("src")).toBe(
      "assets/img/melody/smile.png"
    );
    expect(dialogues[1]?.textContent?.trim()).toBe(
      "Now then, were you here to see Naomi's work? Or did you want to learn more about her?"
    );
    expect(dialogues[1]?.querySelector("img")?.getAttribute("src")).toBe(
      "assets/img/melody/think.png"
    );
  });
});
