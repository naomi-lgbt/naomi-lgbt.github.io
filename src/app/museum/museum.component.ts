import { Component } from "@angular/core";

import { Emote } from "../../interfaces/Emote";
import { Portrait } from "../../interfaces/Portrait";
import { Pose } from "../../interfaces/Pose";
import { AssetsService } from "../assets.service";

type viewType = "intro" | "portrait" | "emote" | "pose";
type assetViewType = Exclude<viewType, "intro">;
type titledAsset = "Portrait" | "Emote" | "Pose";
type pluralAsset = "portraits" | "emotes" | "poses";

const titleView: {
  [key in assetViewType]: titledAsset;
} = {
  portrait: "Portrait",
  emote: "Emote",
  pose: "Pose"
};

const pluralView: {
  [key in assetViewType]: pluralAsset;
} = {
  portrait: "portraits",
  emote: "emotes",
  pose: "poses"
};

/**
 *
 */
@Component({
  selector: "app-museum",
  templateUrl: "./museum.component.html",
  styleUrls: ["./museum.component.css"]
})
export class MuseumComponent {
  public view: viewType = "intro";
  public portraits: Portrait[] = [];
  public emotes: Emote[] = [];
  public poses: Pose[] = [];
  public currentPortraitIndex = 0;
  public currentEmoteIndex = 0;
  public currentPoseIndex = 0;

  /**
   *
   * @param {AssetsService} assetService The instance of the Assets service.
   */
  constructor(private assetService: AssetsService) {
    this.assetService.fetchPortraits().subscribe((portraits) => {
      this.portraits = portraits.sort((a, b) => a.name.localeCompare(b.name));
      this.currentPortraitIndex = Math.floor(Math.random() * portraits.length);
    });
    this.assetService.fetchEmotes().subscribe((emotes) => {
      this.emotes = emotes.sort((a, b) => a.name.localeCompare(b.name));
      this.currentEmoteIndex = Math.floor(Math.random() * emotes.length);
    });
    this.assetService.fetchPoses().subscribe((poses) => {
      this.poses = poses.sort((a, b) => a.name.localeCompare(b.name));
      this.currentPoseIndex = Math.floor(Math.random() * poses.length);
    });
  }

  /**
   *
   * @param {viewType} name The type of view to load.
   */
  changeView(name: viewType) {
    this.view = name;
    window.scrollTo({ top: 0 });
  }

  /**
   *
   * @param {assetViewType} view The type of asset view to load.
   */
  nextAsset(view: assetViewType) {
    const titledView = titleView[view];
    const pluraledView = pluralView[view];
    this[`current${titledView}Index`] =
      this[pluraledView].length - 1 === this[`current${titledView}Index`]
        ? 0
        : this[`current${titledView}Index`] + 1;
  }

  /**
   *
   * @param {assetViewType} view The type of asset view to load.
   */
  previousAsset(view: assetViewType) {
    const titledView = titleView[view];
    const pluraledView = pluralView[view];
    this[`current${titledView}Index`] =
      this[`current${titledView}Index`] === 0
        ? this[pluraledView].length - 1
        : this[`current${titledView}Index`] - 1;
  }

  /**
   *
   * @param {assetViewType} view The type of asset view to load.
   * @param {string} index The string from the select menu.
   */
  selectAsset(view: assetViewType, index: string) {
    const titledView = titleView[view];
    this[`current${titledView}Index`] = parseInt(index);
  }

  /**
   *
   * @param {assetViewType} view The type of asset view to load.
   */
  randomAsset(view: assetViewType) {
    const titledView = titleView[view];
    this[`current${titledView}Index`] = Math.floor(
      Math.random() * this[pluralView[view]].length
    );
  }
}
