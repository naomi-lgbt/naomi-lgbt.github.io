import { Component, OnInit } from '@angular/core';
import { hallOfFame } from 'src/assets/data/hallOfFame';
import { Fight } from 'src/interfaces/Fight';

@Component({
  selector: 'app-arena',
  templateUrl: './arena.component.html',
  styleUrls: ['./arena.component.css'],
})
export class ArenaComponent implements OnInit {
  public view = 'intro';
  public fights: Fight[] = [];

  constructor() {}

  ngOnInit(): void {}

  changeView(name: string) {
    this.view = name;
    this.fights = hallOfFame;
  }
}
