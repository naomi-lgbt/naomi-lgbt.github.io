import { ComponentFixture, TestBed } from "@angular/core/testing";

import { TavernComponent } from "./tavern.component";

describe("TavernComponent", () => {
  let component: TavernComponent;
  let fixture: ComponentFixture<TavernComponent>;
  let compiled: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TavernComponent]
    }).compileComponents();
    fixture = TestBed.createComponent(TavernComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    compiled = fixture.nativeElement;
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should render the intro view", () => {
    expect(component.view).toBe("intro");
    const title = compiled.querySelector("h1");
    expect(title?.textContent?.trim()).toBe("Tavern");
    const buttons = compiled.querySelectorAll(".nes-btn");
    expect(buttons.length).toBe(3);
    expect(buttons[0].tagName).toBe("BUTTON");
    expect(buttons[0].textContent?.trim()).toBe("Ask for Recommendations");
    expect(buttons[1].tagName).toBe("BUTTON");
    expect(buttons[1].textContent?.trim()).toBe("See the Full List");
    expect(buttons[2].tagName).toBe("A");
    expect(buttons[2].textContent?.trim()).toBe("Stay sober and go outside");
    expect(buttons[2].getAttribute("routerLink")).toBe("/plaza");
  });

  it("should render all the dialogues", () => {
    let dialogues = compiled.querySelectorAll(".dialogue");
    expect(dialogues.length).toBe(1);
    expect(dialogues[0]?.textContent?.trim()).toBe(
      "This is a social tavern. You are welcome to sit wherever you like - your fellow adventurers are quite friendly and happy to chat. And Naomi herself might even drop by!"
    );
    expect(dialogues[0]?.querySelector("img")?.getAttribute("src")).toBe(
      "assets/img/melody/smile.png"
    );
    component.changeView("rec");
    fixture.detectChanges();
    compiled = fixture.nativeElement;
    dialogues = compiled.querySelectorAll(".dialogue");
    expect(dialogues.length).toBe(4);
    expect(dialogues[0]?.textContent?.trim()).toBe(
      "The Discord table is a great place to chat with other adventurers about Naomi's fights, your own work, or even other interests such as gaming."
    );
    expect(dialogues[0]?.querySelector("img")?.getAttribute("src")).toBe(
      "assets/img/melody/explain.png"
    );
    expect(dialogues[1]?.textContent?.trim()).toBe(
      "The GitHub table is where you should go if you specifically want to work with other fighters."
    );
    expect(dialogues[1]?.querySelector("img")?.getAttribute("src")).toBe(
      "assets/img/melody/explain.png"
    );
    expect(dialogues[2]?.textContent?.trim()).toBe(
      "The Twitter table is the place where Naomi will share quick updates about her life."
    );
    expect(dialogues[2]?.querySelector("img")?.getAttribute("src")).toBe(
      "assets/img/melody/explain.png"
    );
    expect(dialogues[3]?.textContent?.trim()).toBe(
      "The Steam table is all about gaming, and you might be able to play with Naomi!"
    );
    expect(dialogues[3]?.querySelector("img")?.getAttribute("src")).toBe(
      "assets/img/melody/explain.png"
    );
    component.changeView("full");
    fixture.detectChanges();
    compiled = fixture.nativeElement;
    dialogues = compiled.querySelectorAll(".dialogue");
    expect(dialogues.length).toBe(1);
    expect(dialogues[0]?.textContent?.trim()).toBe(
      "You'll want to use this lens to validate that no one has tampered with the poster. It hasn't happened yet, but just in case..."
    );
    expect(dialogues[0]?.querySelector("img")?.getAttribute("src")).toBe(
      "assets/img/melody/explain.png"
    );
  });

  it("should render the rec view", () => {
    component.changeView("rec");
    fixture.detectChanges();
    compiled = fixture.nativeElement;
    expect(component.view).toBe("rec");
    const title = compiled.querySelector("h1");
    expect(title?.textContent?.trim()).toBe("Tavern");
    const buttons = compiled.querySelectorAll(".nes-btn");
    expect(buttons.length).toBe(6);
    expect(buttons[0].tagName).toBe("A");
    expect(buttons[0].textContent?.trim()).toBe("Discord");
    expect(buttons[0].getAttribute("href")).toBe(
      "https://links.nhcarrigan.com/discord"
    );
    expect(buttons[1].tagName).toBe("A");
    expect(buttons[1].textContent?.trim()).toBe("GitHub");
    expect(buttons[1].getAttribute("href")).toBe(
      "https://links.nhcarrigan.com/github"
    );
    expect(buttons[2].tagName).toBe("A");
    expect(buttons[2].textContent?.trim()).toBe("Twitter");
    expect(buttons[2].getAttribute("href")).toBe(
      "https://links.nhcarrigan.com/twitter"
    );
    expect(buttons[3].tagName).toBe("A");
    expect(buttons[3].textContent?.trim()).toBe("Steam");
    expect(buttons[3].getAttribute("href")).toBe(
      "https://links.nhcarrigan.com/steam"
    );
    expect(buttons[4].tagName).toBe("BUTTON");
    expect(buttons[4].textContent?.trim()).toBe("See the Full List");
    expect(buttons[5].tagName).toBe("A");
    expect(buttons[5].textContent?.trim()).toBe("Stay sober and go outside");
    expect(buttons[5].getAttribute("routerLink")).toBe("/plaza");
  });

  it("should render the full view", () => {
    component.changeView("full");
    fixture.detectChanges();
    compiled = fixture.nativeElement;
    expect(component.view).toBe("full");
    const title = compiled.querySelector("h1");
    expect(title?.textContent?.trim()).toBe("Tavern");
    const buttons = compiled.querySelectorAll(".nes-btn");
    expect(buttons.length).toBe(4);
    expect(buttons[0].tagName).toBe("A");
    expect(buttons[0].textContent?.trim()).toBe("Read the Poster");
    expect(buttons[0].getAttribute("href")).toBe("/assets/data/verify.txt");
    expect(buttons[1].tagName).toBe("A");
    expect(buttons[1].textContent?.trim()).toBe("Examine the Lens");
    expect(buttons[1].getAttribute("href")).toBe("/assets/data/key.txt");
    expect(buttons[2].tagName).toBe("BUTTON");
    expect(buttons[2].textContent?.trim()).toBe("Ask for Recommendations");
    expect(buttons[3].tagName).toBe("A");
    expect(buttons[3].textContent?.trim()).toBe("Stay sober and go outside");
    expect(buttons[3].getAttribute("routerLink")).toBe("/plaza");
  });
});
