import { Component, OnInit } from '@angular/core';
import { adventures } from 'src/app/_data/adventures';
import { Adventure } from 'src/interfaces/Adventure';

@Component({
  selector: 'app-training-hall',
  templateUrl: './training-hall.component.html',
  styleUrls: ['./training-hall.component.css'],
})
export class TrainingHallComponent implements OnInit {
  public view = 'intro';
  public games: Adventure[] = [];
  public currentGameIndex = 0;

  ngOnInit(): void {
    this.games = adventures.sort((a, b) => a.game.localeCompare(b.game));
  }

  changeView(name: string) {
    this.view = name;
    window.scrollTo({ top: 0 });
  }

  nextGame() {
    this.currentGameIndex =
      this.currentGameIndex === this.games.length - 1
        ? 0
        : this.currentGameIndex + 1;
  }

  previousGame() {
    this.currentGameIndex =
      this.currentGameIndex === 0
        ? this.games.length - 1
        : this.currentGameIndex - 1;
  }

  selectGame(index: string) {
    this.currentGameIndex = parseInt(index);
  }
}
