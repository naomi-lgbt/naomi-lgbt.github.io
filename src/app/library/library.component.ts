import { Component } from "@angular/core";

import { library } from "../../data/library";
import { LibraryBook } from "../../interfaces/LibraryBook";

/**
 *
 */
@Component({
  selector: "app-library",
  templateUrl: "./library.component.html"
})
export class LibraryComponent {
  public openBook: LibraryBook | null = null;

  /**
   *
   * @param {string} key The key of the object to find in the library data.
   */
  loadBook(key: string) {
    const chosenBook = library.find((el) => el.key === key);
    if (chosenBook) {
      this.openBook = chosenBook;
      window.scrollTo({ top: 0 });
    }
  }
}
