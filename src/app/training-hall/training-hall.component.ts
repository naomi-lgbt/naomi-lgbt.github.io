import { Component } from '@angular/core';
import { Adventure } from 'src/interfaces/Adventure';
import { AssetsService } from '../assets.service';

@Component({
  selector: 'app-training-hall',
  templateUrl: './training-hall.component.html',
  styleUrls: ['./training-hall.component.css'],
})
export class TrainingHallComponent {
  public view = 'intro';
  public games: Adventure[] = [];
  public currentGameIndex = 0;

  constructor(private assetService: AssetsService) {
    this.assetService.fetchAdventures().subscribe((adventures) => {
      this.games = adventures.sort((a, b) => a.game.localeCompare(b.game));
      this.currentGameIndex = Math.floor(Math.random() * adventures.length);
    });
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
