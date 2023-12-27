import { HttpClientModule } from "@angular/common/http";
import { ComponentFixture, TestBed } from "@angular/core/testing";

import { AssetsService } from "../assets.service";

import { PartnersComponent } from "./partners.component";

describe("PartnersComponent", () => {
  let component: PartnersComponent;
  let fixture: ComponentFixture<PartnersComponent>;
  let compiled: HTMLElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PartnersComponent],
      imports: [HttpClientModule],
      providers: [AssetsService]
    });
    fixture = TestBed.createComponent(PartnersComponent);
    component = fixture.componentInstance;
    component.poses = [
      {
        fileName: "beach.png",
        name: "Vacation",
        alt: "Melody wearing her swimsuit, laying on a towel at the beach.",
        description: "When given the rare day off, Melody takes full advantage."
      },
      {
        fileName: "gun.png",
        name: "Protector",
        alt: "Melody holding an assault rifle, ready to fire.",
        description: "One of her many duties is to ensure Naomi's safety."
      }
    ];
    fixture.detectChanges();
    compiled = fixture.nativeElement;
  });

  it("should render the view correctly", () => {
    const title = compiled.querySelector("h1");
    expect(title?.textContent?.trim()).toBe("Mysterious Room");
    const buttons = compiled.querySelectorAll(".nes-btn");
    expect(buttons.length).toBe(4);
    expect(buttons[0].tagName).toBe("BUTTON");
    expect(buttons[0].textContent?.trim()).toBe("Previous Photo");
    expect(buttons[1].tagName).toBe("BUTTON");
    expect(buttons[1].textContent?.trim()).toBe("Random Photo");
    expect(buttons[2].tagName).toBe("BUTTON");
    expect(buttons[2].textContent?.trim()).toBe("Next Photo");
    expect(buttons[3].tagName).toBe("A");
    expect(buttons[3].textContent?.trim()).toBe("Leave");
    expect(buttons[3].getAttribute("routerLink")).toBe("/plaza");
  });

  it("should render all the dialogues", () => {
    const dialogues = compiled.querySelectorAll(".dialogue");
    expect(dialogues.length).toBe(2);
    expect(dialogues[0]?.textContent?.trim()).toBe(
      "Ah, this is where you can see my mistress with her beloved primary partner Erin."
    );
    expect(dialogues[0]?.querySelector("img")?.getAttribute("src")).toBe(
      "assets/img/melody/smile.png"
    );
    expect(dialogues[1]?.textContent?.trim()).toBe(
      "If you would like to meet Erin, or any of Naomi's other partners, join her Discord."
    );
    expect(dialogues[1]?.querySelector("img")?.getAttribute("src")).toBe(
      "assets/img/melody/wink.png"
    );
  });

  it("should render the poses correctly", () => {
    for (const pose of component.poses) {
      component.selectPose(String(component.poses.indexOf(pose)));
      fixture.detectChanges();
      compiled = fixture.nativeElement;
      const poseBox = compiled.querySelector(".pose");
      const imageLink = poseBox?.querySelector("a");
      expect(imageLink?.getAttribute("href")).toBe(
        `https://cdn.naomi.lgbt/erin/koikatsu/${pose.fileName}`
      );
      expect(imageLink?.getAttribute("target")).toBe("_blank");
      const img = poseBox?.querySelector("img");
      expect(img?.getAttribute("src")).toBe(
        `https://cdn.naomi.lgbt/erin/koikatsu/${pose.fileName}`
      );
      expect(img?.getAttribute("alt")).toBe(pose.alt);
      const title = poseBox?.querySelector("h2");
      expect(title?.textContent?.trim()).toBe(pose.name);
      const description = poseBox?.querySelector("p");
      expect(description?.textContent?.trim()).toBe(pose.description);
    }
  });
});
