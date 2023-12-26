import { ComponentFixture, TestBed } from "@angular/core/testing";
import { library } from "src/data/library";

import { LibraryComponent } from "./library.component";

describe("LibraryComponent", () => {
  let component: LibraryComponent;
  let fixture: ComponentFixture<LibraryComponent>;
  let compiled: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LibraryComponent]
    }).compileComponents();
    fixture = TestBed.createComponent(LibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    compiled = fixture.nativeElement;
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should render the intro view", () => {
    expect(component.openBook).toBeNull();
    const title = compiled.querySelector("h1");
    expect(title?.textContent?.trim()).toBe("Library");
    const buttons = compiled.querySelectorAll(".nes-btn");
    expect(buttons.length).toBe(4);
    expect(buttons[0].tagName).toBe("BUTTON");
    expect(buttons[0].textContent?.trim()).toBe(library[0].title);
    expect(buttons[1].tagName).toBe("BUTTON");
    expect(buttons[1].textContent?.trim()).toBe(library[1].title);
    expect(buttons[2].tagName).toBe("BUTTON");
    expect(buttons[2].textContent?.trim()).toBe(library[2].title);
    expect(buttons[3].tagName).toBe("A");
    expect(buttons[3].textContent?.trim()).toBe("Thank her, and leave");
    expect(buttons[3].getAttribute("routerLink")).toBe("/plaza");
  });

  it("should render all the dialogues", () => {
    let dialogues = compiled.querySelectorAll(".dialogue");
    expect(dialogues.length).toBe(1);
    expect(dialogues[0]?.textContent?.trim()).toBe(
      "Now then, which book may I fetch for you?"
    );
    expect(dialogues[0]?.querySelector("img")?.getAttribute("src")).toBe(
      "assets/img/melody/smile.png"
    );
    component.loadBook(library[0].key);
    fixture.detectChanges();
    compiled = fixture.nativeElement;
    dialogues = compiled.querySelectorAll(".dialogue");
    expect(dialogues.length).toBe(1);
    expect(dialogues[0]?.textContent?.trim()).toBe(
      "Would you like to look at another book?"
    );
    expect(dialogues[0]?.querySelector("img")?.getAttribute("src")).toBe(
      "assets/img/melody/smile.png"
    );
  });

  for (const book of library) {
    it(`should render the ${book.title} book correctly`, () => {
      component.loadBook(book.key);
      fixture.detectChanges();
      compiled = fixture.nativeElement;
      expect(component.openBook?.key).toBe(book.key);
      const title = compiled.querySelector("h1");
      expect(title?.textContent?.trim()).toBe(book.title);
      const contents = compiled.querySelector(".is-dark");
      const lines = contents?.querySelectorAll("p");
      expect(lines?.length).toBe(book.text.length);
      const buttons = compiled.querySelectorAll(".nes-btn");
      expect(buttons.length).toBe(3);
      expect(buttons[0].tagName).toBe("BUTTON");
      expect(buttons[0].textContent?.trim()).toBe(
        library.filter((e) => e.key !== book.key)[0].title
      );
      expect(buttons[1].tagName).toBe("BUTTON");
      expect(buttons[1].textContent?.trim()).toBe(
        library.filter((e) => e.key !== book.key)[1].title
      );
      expect(buttons[2].tagName).toBe("A");
      expect(buttons[2].textContent?.trim()).toBe("Thank her, and leave");
      expect(buttons[2].getAttribute("routerLink")).toBe("/plaza");
    });
  }
});
