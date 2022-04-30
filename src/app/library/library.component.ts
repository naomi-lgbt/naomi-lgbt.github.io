import { Component, OnInit } from '@angular/core';
import { library } from 'src/assets/data/library';
import { LibraryBook } from 'src/interfaces/LibraryBook';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.css'],
})
export class LibraryComponent implements OnInit {
  public openBook: LibraryBook | null = null;

  constructor() {}

  ngOnInit(): void {}

  loadBook(key: string) {
    const chosenBook = library.find((el) => el.key === key);
    if (chosenBook) {
      this.openBook = chosenBook;
      window.scrollTo({top: 0})
    }
  }
}
