import { HttpClientModule } from "@angular/common/http";
import { ComponentFixture, TestBed } from "@angular/core/testing";

import { AssetsService } from "../assets.service";

import { MuseumComponent } from "./museum.component";

describe("MuseumComponent", () => {
  let component: MuseumComponent;
  let fixture: ComponentFixture<MuseumComponent>;
  let compiled: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MuseumComponent],
      imports: [HttpClientModule],
      providers: [AssetsService]
    }).compileComponents();
    fixture = TestBed.createComponent(MuseumComponent);
    component = fixture.componentInstance;
    component.portraits = [
      {
        fileName: "feito1.png",
        name: "Peace And Happiness",
        artist: "feito161",
        url: "https://twitter.com/feito161",
        alt: "Naomi standing and making peace signs with her hands.",
        description: "She hopes you have a great day!"
      },
      {
        fileName: "feito2.png",
        name: "Blissful Rest",
        artist: "feito161",
        url: "https://twitter.com/feito161",
        alt: "Naomi laying on her stomach with her legs bent upwards.",
        description:
          "Naomi can't sit still. She's always changing poses and kicking her legs around."
      }
    ];
    component.emotes = [
      {
        fileName: "NaomiAnnoyed.png",
        name: "Annoyed",
        alt: "Naomi with her hands on her hips, looking away with an annoyed expression.",
        description: "Something made her mad, was it you?"
      },
      {
        fileName: "NaomiBlock.png",
        name: "Block",
        alt: "Naomi pointing to the block button from a Discord menu.",
        description: "She's just teasing you. Probably."
      }
    ];
    component.poses = [
      {
        fileName: "alone.png",
        name: "A Night Alone",
        alt: "Naomi sitting on the couch, a beer in hand and a morose look on her face.",
        description: "Sometimes Naomi doesn't want to spend the night alone."
      },
      {
        fileName: "ayleid.png",
        name: "Ayleid Ruin",
        alt: "Naomi sitting on an Ayleid well, a flirty look on her face.",
        description:
          "When on an adventure, Naomi is always on the lookout for a great photo opportunity."
      }
    ];
    fixture.detectChanges();
    compiled = fixture.nativeElement;
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should render the intro view", () => {
    expect(component.view).toBe("intro");
    const title = compiled.querySelector("h1");
    expect(title?.textContent?.trim()).toBe("Museum");
    const buttons = compiled.querySelectorAll(".nes-btn");
    expect(buttons.length).toBe(4);
    expect(buttons[0].tagName).toBe("BUTTON");
    expect(buttons[0].textContent?.trim()).toBe("Portrait Exhibit");
    expect(buttons[1].tagName).toBe("BUTTON");
    expect(buttons[1].textContent?.trim()).toBe("Emotion Exhibit");
    expect(buttons[2].tagName).toBe("BUTTON");
    expect(buttons[2].textContent?.trim()).toBe("Mural Exhibit");
    expect(buttons[3].tagName).toBe("A");
    expect(buttons[3].textContent?.trim()).toBe("Enough art for now");
    expect(buttons[3].getAttribute("routerLink")).toBe("/plaza");
  });

  it("should render all the dialogues", () => {
    const dialogues = compiled.querySelectorAll(".dialogue");
    expect(dialogues.length).toBe(2);
    expect(dialogues[0]?.textContent?.trim()).toBe(
      "Welcome to the Avalon Museum! Would you like to hear more about our exhibits?"
    );
    expect(dialogues[0]?.querySelector("img")?.getAttribute("src")).toBe(
      "assets/img/melody/smile.png"
    );
    expect(dialogues[1]?.textContent?.trim()).toBe(
      `We currently have three exhibits. Our portrait exhibit is the most popular, but we also have a special "Emotion" exhibit and a collection of murals.`
    );
    expect(dialogues[1]?.querySelector("img")?.getAttribute("src")).toBe(
      "assets/img/melody/explain.png"
    );
  });

  it("should render the portrait view", () => {
    component.changeView("portrait");
    fixture.detectChanges();
    compiled = fixture.nativeElement;
    expect(component.view).toBe("portrait");
    const title = compiled.querySelector("h1");
    expect(title?.textContent?.trim()).toBe("Museum");
    const buttons = compiled.querySelectorAll(".nes-btn");
    expect(buttons.length).toBe(6);
    expect(buttons[0].tagName).toBe("BUTTON");
    expect(buttons[0].textContent?.trim()).toBe("Previous Portrait");
    expect(buttons[1].tagName).toBe("BUTTON");
    expect(buttons[1].textContent?.trim()).toBe("Random Portrait");
    expect(buttons[2].tagName).toBe("BUTTON");
    expect(buttons[2].textContent?.trim()).toBe("Next Portrait");
    expect(buttons[3].tagName).toBe("BUTTON");
    expect(buttons[3].textContent?.trim()).toBe("Emotion Exhibit");
    expect(buttons[4].tagName).toBe("BUTTON");
    expect(buttons[4].textContent?.trim()).toBe("Mural Exhibit");
    expect(buttons[5].tagName).toBe("A");
    expect(buttons[5].textContent?.trim()).toBe("Enough art for now");
    expect(buttons[5].getAttribute("routerLink")).toBe("/plaza");
  });

  it(`should render the portraits correctly`, () => {
    for (const portrait of component.portraits) {
      component.changeView("portrait");
      component.selectAsset(
        "portrait",
        String(component.portraits.indexOf(portrait))
      );
      fixture.detectChanges();
      compiled = fixture.nativeElement;
      expect(component.view).toBe("portrait");
      const portraitBox = compiled.querySelector(".image");
      const links = portraitBox?.querySelectorAll("a");
      const imageLink = links?.[0];
      expect(imageLink?.getAttribute("href")).toBe(
        `https://cdn.naomi.lgbt/naomi/art/${portrait.fileName}`
      );
      expect(imageLink?.getAttribute("target")).toBe("_blank");
      const artistLink = links?.[1];
      expect(artistLink?.getAttribute("href")).toBe(portrait.url);
      expect(artistLink?.getAttribute("target")).toBe("_blank");
      const img = portraitBox?.querySelector("img");
      expect(img?.getAttribute("src")).toBe(
        `https://cdn.naomi.lgbt/naomi/art/${portrait.fileName}`
      );
      expect(img?.getAttribute("alt")).toBe(portrait.alt);
      const title = portraitBox?.querySelector("h2");
      expect(title?.textContent?.trim()).toBe(portrait.name);
      const ps = portraitBox?.querySelectorAll("p");
      expect(ps?.length).toBe(2);
      expect(ps?.[0].textContent?.trim()).toBe(portrait.description);
      expect(ps?.[1].textContent?.trim()).toBe(`-- By ${portrait.artist}`);
    }
  });

  it("should render the emote view", () => {
    component.changeView("emote");
    fixture.detectChanges();
    compiled = fixture.nativeElement;
    expect(component.view).toBe("emote");
    const title = compiled.querySelector("h1");
    expect(title?.textContent?.trim()).toBe("Museum");
    const buttons = compiled.querySelectorAll(".nes-btn");
    expect(buttons.length).toBe(6);
    expect(buttons[0].tagName).toBe("BUTTON");
    expect(buttons[0].textContent?.trim()).toBe("Previous Emote");
    expect(buttons[1].tagName).toBe("BUTTON");
    expect(buttons[1].textContent?.trim()).toBe("Random Emote");
    expect(buttons[2].tagName).toBe("BUTTON");
    expect(buttons[2].textContent?.trim()).toBe("Next Emote");
    expect(buttons[3].tagName).toBe("BUTTON");
    expect(buttons[3].textContent?.trim()).toBe("Portrait Exhibit");
    expect(buttons[4].tagName).toBe("BUTTON");
    expect(buttons[4].textContent?.trim()).toBe("Mural Exhibit");
    expect(buttons[5].tagName).toBe("A");
    expect(buttons[5].textContent?.trim()).toBe("Enough art for now");
    expect(buttons[5].getAttribute("routerLink")).toBe("/plaza");
  });

  it(`should render the emotes correctly`, () => {
    for (const emote of component.emotes) {
      component.changeView("emote");
      component.selectAsset("emote", String(component.emotes.indexOf(emote)));
      fixture.detectChanges();
      compiled = fixture.nativeElement;
      expect(component.view).toBe("emote");
      const emoteBox = compiled.querySelector(".image");
      const imageLink = emoteBox?.querySelector("a");
      expect(imageLink?.getAttribute("href")).toBe(
        `https://cdn.naomi.lgbt/naomi/emotes/${emote.fileName}`
      );
      expect(imageLink?.getAttribute("target")).toBe("_blank");
      const img = emoteBox?.querySelector("img");
      expect(img?.getAttribute("src")).toBe(
        `https://cdn.naomi.lgbt/naomi/emotes/${emote.fileName}`
      );
      expect(img?.getAttribute("alt")).toBe(emote.alt);
      const title = emoteBox?.querySelector("h2");
      expect(title?.textContent?.trim()).toBe(emote.name);
      const description = emoteBox?.querySelector("p");
      expect(description?.textContent?.trim()).toBe(emote.description);
    }
  });

  it("should render the murals view", () => {
    component.changeView("pose");
    fixture.detectChanges();
    compiled = fixture.nativeElement;
    expect(component.view).toBe("pose");
    const title = compiled.querySelector("h1");
    expect(title?.textContent?.trim()).toBe("Museum");
    const buttons = compiled.querySelectorAll(".nes-btn");
    expect(buttons.length).toBe(6);
    expect(buttons[0].tagName).toBe("BUTTON");
    expect(buttons[0].textContent?.trim()).toBe("Previous Mural");
    expect(buttons[1].tagName).toBe("BUTTON");
    expect(buttons[1].textContent?.trim()).toBe("Random Mural");
    expect(buttons[2].tagName).toBe("BUTTON");
    expect(buttons[2].textContent?.trim()).toBe("Next Mural");
    expect(buttons[3].tagName).toBe("BUTTON");
    expect(buttons[3].textContent?.trim()).toBe("Portrait Exhibit");
    expect(buttons[4].tagName).toBe("BUTTON");
    expect(buttons[4].textContent?.trim()).toBe("Emotion Exhibit");
    expect(buttons[5].tagName).toBe("A");
    expect(buttons[5].textContent?.trim()).toBe("Enough art for now");
    expect(buttons[5].getAttribute("routerLink")).toBe("/plaza");
  });

  it(`should render the poses correctly`, () => {
    for (const pose of component.poses) {
      component.changeView("pose");
      component.selectAsset("pose", String(component.poses.indexOf(pose)));
      fixture.detectChanges();
      compiled = fixture.nativeElement;
      expect(component.view).toBe("pose");
      const emoteBox = compiled.querySelector(".image");
      const imageLink = emoteBox?.querySelector("a");
      expect(imageLink?.getAttribute("href")).toBe(
        `https://cdn.naomi.lgbt/naomi/koikatsu/${pose.fileName}`
      );
      expect(imageLink?.getAttribute("target")).toBe("_blank");
      const img = emoteBox?.querySelector("img");
      expect(img?.getAttribute("src")).toBe(
        `https://cdn.naomi.lgbt/naomi/koikatsu/${pose.fileName}`
      );
      expect(img?.getAttribute("alt")).toBe(pose.alt);
      const title = emoteBox?.querySelector("h2");
      expect(title?.textContent?.trim()).toBe(pose.name);
      const description = emoteBox?.querySelector("p");
      expect(description?.textContent?.trim()).toBe(pose.description);
    }
  });
});
