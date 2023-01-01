import { Component, OnInit } from '@angular/core';
import { emotes } from 'src/assets/data/emotes';
import { portraits } from 'src/assets/data/portraits';
import { Emote } from 'src/interfaces/Emote';
import { Portrait } from 'src/interfaces/Portrait';

@Component({
  selector: 'app-museum',
  templateUrl: './museum.component.html',
  styleUrls: ['./museum.component.css'],
})
export class MuseumComponent implements OnInit {
  public view = 'intro';
  public portraits: Portrait[] = [];
  public emotes: Emote[] = [];
  public currentPortraitIndex = 0;
  public currentEmoteIndex = 0;

  constructor() {}

  ngOnInit(): void {
    this.portraits = portraits;
    this.emotes = emotes;
  }

  changeView(name: string) {
    this.view = name;
    window.scrollTo({ top: 0 });
  }

  nextPortrait() {
    this.currentPortraitIndex =
      this.currentPortraitIndex === this.portraits.length - 1
        ? 0
        : this.currentPortraitIndex + 1;
  }

  previousPortrait() {
    this.currentPortraitIndex =
      this.currentPortraitIndex === 0
        ? this.portraits.length - 1
        : this.currentPortraitIndex - 1;
  }

  selectPortrait(index: string) {
    this.currentPortraitIndex = parseInt(index);
  }

  nextEmote() {
    this.currentEmoteIndex =
      this.currentEmoteIndex === this.emotes.length - 1
        ? 0
        : this.currentEmoteIndex + 1;
  }

  previousEmote() {
    this.currentEmoteIndex =
      this.currentEmoteIndex === 0
        ? this.emotes.length - 1
        : this.currentEmoteIndex - 1;
  }

  selectEmote(index: string) {
    this.currentEmoteIndex = parseInt(index);
  }
}
