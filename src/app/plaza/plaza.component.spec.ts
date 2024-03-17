import { ComponentFixture, TestBed } from "@angular/core/testing";

import { PlazaComponent } from "./plaza.component";

describe("PlazaComponent", () => {
  let component: PlazaComponent;
  let fixture: ComponentFixture<PlazaComponent>;
  let compiled: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PlazaComponent]
    }).compileComponents();
    fixture = TestBed.createComponent(PlazaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    compiled = fixture.nativeElement;
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should render the view correctly", () => {
    const title = compiled.querySelector("h1");
    expect(title?.textContent?.trim()).toBe("Town Plaza");
    const buttons = compiled.querySelectorAll(".nes-btn");
    expect(buttons.length).toBe(7);
    expect(buttons[0].tagName).toBe("A");
    expect(buttons[0].textContent?.trim()).toBe("Library");
    expect(buttons[0].getAttribute("routerLink")).toBe("/library");
    expect(buttons[1].tagName).toBe("A");
    expect(buttons[1].textContent?.trim()).toBe("Tavern");
    expect(buttons[1].getAttribute("routerLink")).toBe("/tavern");
    expect(buttons[2].tagName).toBe("A");
    expect(buttons[2].textContent?.trim()).toBe("Museum");
    expect(buttons[2].getAttribute("routerLink")).toBe("/museum");
    expect(buttons[3].tagName).toBe("A");
    expect(buttons[3].textContent?.trim()).toBe("Training Hall");
    expect(buttons[3].getAttribute("routerLink")).toBe("/training-hall");
    expect(buttons[4].tagName).toBe("A");
    expect(buttons[4].textContent?.trim()).toBe("Tailor");
    expect(buttons[4].getAttribute("routerLink")).toBe("/tailor");
    expect(buttons[5].tagName).toBe("A");
    expect(buttons[5].textContent?.trim()).toBe("Temple");
    expect(buttons[5].getAttribute("routerLink")).toBe("/temple");
    expect(buttons[6].tagName).toBe("A");
    expect(buttons[6].textContent?.trim()).toBe("Melody's Office");
    expect(buttons[6].getAttribute("routerLink")).toBe("/melody");
  });

  it("should render all the dialogues", () => {
    const dialogues = compiled.querySelectorAll(".dialogue");
    expect(dialogues.length).toBe(8);
    expect(dialogues[0]?.textContent?.trim()).toBe(
      "Ah yes, allow me to explain the layout of our city."
    );
    expect(dialogues[0]?.querySelector("img")?.getAttribute("src")).toBe(
      "assets/img/melody/smile.png"
    );
    expect(dialogues[1]?.textContent?.trim()).toBe(
      "Over at the Library, you could read up on Naomi's history and background."
    );
    expect(dialogues[1]?.querySelector("img")?.getAttribute("src")).toBe(
      "assets/img/melody/explain.png"
    );
    expect(dialogues[2]?.textContent?.trim()).toBe(
      "The Tavern would be the place to go to socialise with your fellow travellers."
    );
    expect(dialogues[2]?.querySelector("img")?.getAttribute("src")).toBe(
      "assets/img/melody/explain.png"
    );
    expect(dialogues[3]?.textContent?.trim()).toBe(
      "Great works of art can be seen in the Museum."
    );
    expect(dialogues[3]?.querySelector("img")?.getAttribute("src")).toBe(
      "assets/img/melody/explain.png"
    );
    expect(dialogues[4]?.textContent?.trim()).toBe(
      "If you wish to see past adventures and brush up on your adventuring abilities, spend some time in the Training Hall."
    );
    expect(dialogues[4]?.querySelector("img")?.getAttribute("src")).toBe(
      "assets/img/melody/explain.png"
    );
    expect(dialogues[5]?.textContent?.trim()).toBe(
      "The Tailor is where you can find some of Naomi's typical clothing sets."
    );
    expect(dialogues[5]?.querySelector("img")?.getAttribute("src")).toBe(
      "assets/img/melody/explain.png"
    );
    expect(dialogues[6]?.textContent?.trim()).toBe(
      "People sometimes choose to make a donation to the Temple, so that the work done in this land can continue."
    );
    expect(dialogues[6]?.querySelector("img")?.getAttribute("src")).toBe(
      "assets/img/melody/explain.png"
    );
    expect(dialogues[7]?.textContent?.trim()).toBe(
      "Then there is my office, where I plan my work."
    );
    expect(dialogues[7]?.querySelector("img")?.getAttribute("src")).toBe(
      "assets/img/melody/explain.png"
    );
  });
});
