import { Component } from '@angular/core';
import { library } from 'src/data/library';
import { LibraryBook } from 'src/interfaces/LibraryBook';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
})
export class LibraryComponent {
  public openBook: LibraryBook | null = null;

  loadBook(key: string) {
    const chosenBook = library.find((el) => el.key === key);
    if (chosenBook) {
      this.openBook = chosenBook;
      window.scrollTo({ top: 0 });
    }
  }
}
