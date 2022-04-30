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

  constructor() {}

  ngOnInit(): void {
    this.portraits = portraits;
    this.emotes = emotes;
  }

  changeView(name: string) {
    this.view = name;
    window.scrollTo({ top: 0 });
  }
}
