import { Component } from '@angular/core';
import { Emote } from 'src/interfaces/Emote';
import { Portrait } from 'src/interfaces/Portrait';
import { AssetsService } from '../assets.service';
import { Pose } from 'src/interfaces/Pose';

type viewType = 'intro' | 'portrait' | 'emote' | 'pose';
type assetViewType = Exclude<viewType, 'intro'>;
type titledAsset = 'Portrait' | 'Emote' | 'Pose';
type pluralAsset = 'portraits' | 'emotes' | 'poses';

const titleView: {
  [key in assetViewType]: titledAsset;
} = {
  portrait: 'Portrait',
  emote: 'Emote',
  pose: 'Pose',
};

const pluralView: {
  [key in assetViewType]: pluralAsset;
} = {
  portrait: 'portraits',
  emote: 'emotes',
  pose: 'poses',
};

@Component({
  selector: 'app-museum',
  templateUrl: './museum.component.html',
  styleUrls: ['./museum.component.css'],
})
export class MuseumComponent {
  public view: viewType = 'intro';
  public portraits: Portrait[] = [];
  public emotes: Emote[] = [];
  public poses: Pose[] = [];
  public currentPortraitIndex = 0;
  public currentEmoteIndex = 0;
  public currentPoseIndex = 0;

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

  changeView(name: viewType) {
    this.view = name;
    window.scrollTo({ top: 0 });
  }

  nextAsset(view: assetViewType) {
    const titledView = titleView[view];
    const pluraledView = pluralView[view];
    this[`current${titledView}Index`] =
      this[pluraledView].length - 1 === this[`current${titledView}Index`]
        ? 0
        : this[`current${titledView}Index`] + 1;
  }

  previousAsset(view: assetViewType) {
    const titledView = titleView[view];
    const pluraledView = pluralView[view];
    this[`current${titledView}Index`] =
      this[`current${titledView}Index`] === 0
        ? this[pluraledView].length - 1
        : this[`current${titledView}Index`] - 1;
  }

  selectAsset(view: assetViewType, index: string) {
    const titledView = titleView[view];
    this[`current${titledView}Index`] = parseInt(index);
  }
}
