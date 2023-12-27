import { Component } from "@angular/core";

import { Adventure } from "../../interfaces/Adventure";
import { AssetsService } from "../assets.service";

/**
 *
 */
@Component({
  selector: "app-training-hall",
  templateUrl: "./training-hall.component.html",
  styleUrls: ["./training-hall.component.css"]
})
export class TrainingHallComponent {
  public view = "intro";
  public games: Adventure[] = [];
  public currentGameIndex = 0;

  /**
   *
   * @param {AssetsService} assetService The instance of the Asset service.
   */
  constructor(private assetService: AssetsService) {
    this.assetService.fetchAdventures().subscribe((adventures) => {
      this.games = adventures.sort((a, b) => a.game.localeCompare(b.game));
      this.currentGameIndex = Math.floor(Math.random() * adventures.length);
    });
  }

  /**
   *
   * @param {string} name The name of the view to switch to.
   */
  changeView(name: string) {
    this.view = name;
    window.scrollTo({ top: 0 });
  }

  /**
   *
   */
  nextGame() {
    this.currentGameIndex =
      this.currentGameIndex === this.games.length - 1
        ? 0
        : this.currentGameIndex + 1;
  }

  /**
   *
   */
  previousGame() {
    this.currentGameIndex =
      this.currentGameIndex === 0
        ? this.games.length - 1
        : this.currentGameIndex - 1;
  }

  /**
   *
   * @param {string} index The index from the select menu.
   */
  selectGame(index: string) {
    this.currentGameIndex = parseInt(index);
  }

  /**
   *
   */
  randomGame() {
    this.currentGameIndex = Math.floor(Math.random() * this.games.length);
  }
}
