import { HttpClientModule } from "@angular/common/http";
import { ComponentFixture, TestBed } from "@angular/core/testing";

import { AssetsService } from "../assets.service";

import { TrainingHallComponent } from "./training-hall.component";

describe("TrainingHallComponent", () => {
  let component: TrainingHallComponent;
  let fixture: ComponentFixture<TrainingHallComponent>;
  let compiled: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TrainingHallComponent],
      imports: [HttpClientModule],
      providers: [AssetsService]
    }).compileComponents();
    fixture = TestBed.createComponent(TrainingHallComponent);
    component = fixture.componentInstance;
    component.games = [
      {
        fileName: "code-vein.jpg",
        game: "Code Vein",
        alt: "Naomi wearing a black knit sweater dress with no sleeves and a very low back.",
        description:
          "Becoming a Revenant was not what Naomi expected, but it was indeed a fun adventure."
      },
      {
        fileName: "cyberpunk-2077.jpg",
        game: "Cyberpunk 2077",
        alt: "Naomi wearing a black tank top and leather pencil skirt, with dark sunglasses.",
        description:
          "By the end of this adventure, she and Johnny Silverhand became quite good friends."
      }
    ];
    fixture.detectChanges();
    compiled = fixture.nativeElement;
  });

  it("should create", async () => {
    expect(component).toBeTruthy();
  });

  it("should render the intro view", async () => {
    expect(component.view).toBe("intro");
    const title = compiled.querySelector("h1");
    expect(title?.textContent?.trim()).toBe("Training Hall");
    const buttons = compiled.querySelectorAll(".nes-btn");
    expect(buttons.length).toBe(2);
    expect(buttons[0].tagName).toBe("BUTTON");
    expect(buttons[0].textContent?.trim()).toBe("Follow the instructor");
    expect(buttons[1].tagName).toBe("A");
    expect(buttons[1].textContent?.trim()).toBe(
      "This is too hard - Back outside!"
    );
    expect(buttons[1].getAttribute("routerLink")).toBe("/plaza");
  });

  it("should render all the dialogues", () => {
    let dialogues = compiled.querySelectorAll(".dialogue");
    expect(dialogues.length).toBe(2);
    expect(dialogues[0]?.textContent?.trim()).toBe(
      "Did you want to do some training?"
    );
    expect(dialogues[0]?.querySelector("img")?.getAttribute("src")).toBe(
      "assets/img/melody/think.png"
    );
    expect(dialogues[1]?.textContent?.trim()).toBe(
      "Very good! The best training starts with reviewing past adventurers' success. In this case, we'll look at some of Naomi's travels."
    );
    expect(dialogues[1]?.querySelector("img")?.getAttribute("src")).toBe(
      "assets/img/melody/smile.png"
    );
    component.changeView("games");
    fixture.detectChanges();
    compiled = fixture.nativeElement;
    dialogues = compiled.querySelectorAll(".dialogue");
    expect(dialogues.length).toBe(1);
    expect(dialogues[0]?.textContent?.trim()).toBe(
      "Spend some time studying these. Learn from them. When your learning is sufficient, we can proceed."
    );
    expect(dialogues[0]?.querySelector("img")?.getAttribute("src")).toBe(
      "assets/img/melody/explain.png"
    );
  });

  it("should render the games view", async () => {
    component.changeView("games");
    fixture.detectChanges();
    compiled = fixture.nativeElement;
    expect(component.view).toBe("games");
    const title = compiled.querySelector("h1");
    expect(title?.textContent?.trim()).toBe("Training Hall");
    const buttons = compiled.querySelectorAll(".nes-btn");
    expect(buttons.length).toBe(4);
    expect(buttons[0].tagName).toBe("BUTTON");
    expect(buttons[0].textContent?.trim()).toBe("Previous Adventure");
    expect(buttons[1].tagName).toBe("BUTTON");
    expect(buttons[1].textContent?.trim()).toBe("Random Adventure");
    expect(buttons[2].tagName).toBe("BUTTON");
    expect(buttons[2].textContent?.trim()).toBe("Next Adventure");
    expect(buttons[3].tagName).toBe("A");
    expect(buttons[3].textContent?.trim()).toBe("That's enough for today");
    expect(buttons[3].getAttribute("routerLink")).toBe("/plaza");
  });

  it(`should render the adventures correctly`, async () => {
    for (const adventure of component.games) {
      component.changeView("games");
      component.selectGame(String(component.games.indexOf(adventure)));
      fixture.detectChanges();
      compiled = fixture.nativeElement;
      expect(component.view).toBe("games");
      const game = compiled.querySelector(".game");
      const imgLink = game?.querySelector("a");
      expect(imgLink?.getAttribute("href")).toBe(
        `https://cdn.naomi.lgbt/naomi/games/${adventure.fileName}`
      );
      expect(imgLink?.getAttribute("target")).toBe("_blank");
      const img = game?.querySelector("img");
      expect(img?.getAttribute("src")).toBe(
        `https://cdn.naomi.lgbt/naomi/games/${adventure.fileName}`
      );
      expect(img?.getAttribute("alt")).toBe(adventure.alt);
      const title = game?.querySelector("h2");
      expect(title?.textContent?.trim()).toBe(adventure.game);
      const description = game?.querySelector("p");
      expect(description?.textContent?.trim()).toBe(adventure.description);
    }
  });
});
